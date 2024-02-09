import * as THREE from 'three';
import {ThreeHandler} from './ThreeHandler.ts';
import {GlyphAtlas, GlyphJson} from './GlyphLoader.ts';
import {GuiHandler} from './GuiHandler.ts';

type MeshData = {
	meshes: Array<{
		mesh: THREE.InstancedMesh,
		colors: Array<THREE.Color>
	}>,
	instancePositionMatrices: Array<THREE.Matrix4>
};

export class SceneHandler {
	protected threeHandler: ThreeHandler;
	public guiHandler: GuiHandler | undefined;

	readonly scene: THREE.Scene;
	protected meshGroup: THREE.Group;

	protected json: GlyphJson | undefined;

	protected originalObjects: Array<THREE.Object3D>;
	protected instancedMeshes: Array<MeshData>;
	protected sizeNormalizationFactor: number;

	protected variableMapping: Record<string, {name: string, index: number}>;

	protected basicSize: number;

	protected csv: Array<Array<string>>;
	protected csvMin: THREE.Vector2;
	protected csvMax: THREE.Vector2;

	constructor(threeHandler: ThreeHandler) {
		this.threeHandler = threeHandler;

		this.csv = [];
		this.csvMin = new THREE.Vector2(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
		this.csvMax = new THREE.Vector2(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);

		this.originalObjects = [];
		this.instancedMeshes = [];
		this.sizeNormalizationFactor = 1;

		this.basicSize = 0.1;

		this.variableMapping = {
			positionX: { name: 'x', index: -1 },
			positionY: { name: 'y', index: -1 }
		};

		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0xaaaacc);

		// Lighting
		const ambientLight = new THREE.AmbientLight(0xdddddd);
		this.scene.add(ambientLight);
		const pointLight = new THREE.PointLight(0xffffff, 1, 0, 0);
		pointLight.castShadow = true;
		pointLight.shadow.mapSize = new THREE.Vector2(4096, 4096);
		pointLight.position.set(-0.5, 2, 1);
		this.scene.add(pointLight);

		// Grid
		const planeGeometry = new THREE.PlaneGeometry(2.25, 2.25);
		planeGeometry.rotateX(Math.PI / 2);
		const planeMaterial = new THREE.MeshPhongMaterial({color: 0xccccdd, side: THREE.DoubleSide});
		const plane = new THREE.Mesh(planeGeometry, planeMaterial);
		plane.receiveShadow = true;
		plane.translateY(-0.0001);
		this.scene.add(plane);

		const grid = new THREE.GridHelper(2.25, 100);
		grid.receiveShadow = true;
		this.scene.add(grid);

		this.meshGroup = new THREE.Group();
		this.scene.add(this.meshGroup);
	}

	public async createScene(csv?: Array<Array<string>>): Promise<void> {
		if (csv) this.csv = csv;
		if (this.csv.length === 0) {
			console.error('Cannot create scene from empty csv!');
			return;
		}

		let invalidMappings = '';

		for (const variableMappingKey in this.variableMapping) {
			this.findIndex(variableMappingKey);
			if (this.variableMapping[variableMappingKey].index === -1) invalidMappings += ('\t' + variableMappingKey + '\n');
		}

		if (invalidMappings.length !== 0) {
			let messageString = 'The following columns don\'t exist in the currently loaded csv:\n' + invalidMappings + '\nThese columns exist:\n';

			for (let i = 0; i < this.csv[0].length; ++i) messageString += ('\t' + this.csv[0][i] + '\n');

			alert(messageString);
			return;
		}

		this.findExtremaInCsv();

		await this.addMeshes();
	}

	protected async addMeshes(): Promise<void> {
		// Clear old instance data
		this.instancedMeshes = new Array<MeshData>(this.originalObjects.length);
		this.meshGroup.clear();

		/*
		 * Find how many instances of each Mesh are required and where they should be placed.
		 */
		const instanceCounter = new Array<number>(this.originalObjects.length);
		const positions = new Array<Array<THREE.Vector2>>(this.originalObjects.length);
		for (let i = 0; i < this.csv.length - 1; ++i) {
			// First line of csv contains column names
			const csvIndex = i + 1;

			const meshIndex = this.calculateMeshIndex(this.csv[csvIndex]);

			if (!instanceCounter[meshIndex]) instanceCounter[meshIndex] = 0;
			++instanceCounter[meshIndex];

			if (!positions[meshIndex]) positions[meshIndex] = [];
			positions[meshIndex].push(this.normalizeCoordinatesToNDC(new THREE.Vector2(Number(this.csv[csvIndex][this.variableMapping['positionX'].index]), Number(this.csv[csvIndex][this.variableMapping['positionY'].index]))));

			if (!this.instanceSizes[meshIndex]) this.instanceSizes[meshIndex] = [];
			this.instanceSizes[meshIndex].push({
				basicScaleFactor: 1,
				variationFactor: Number(this.csv[csvIndex][this.variableMapping['size'].index])
			});
		}

		/*
		 * Create an InstancedMesh from each Mesh loaded from the GLTF, as well as position and scale their instances.
		 */
		for (let meshId = 0; meshId < this.originalObjects.length; ++meshId) {
			const originalMesh = this.originalObjects[meshId];
			const originalMaterial = originalMesh.material as THREE.MeshStandardMaterial;

			//const cheapMaterial = new THREE.MeshLambertMaterial({map: originalMaterial.map, color: originalMaterial.color})

			const instancedMesh = new THREE.InstancedMesh(originalMesh.geometry, originalMaterial, instanceCounter[meshId]);
			this.instancedMeshes[meshId] = instancedMesh;
			instancedMesh.receiveShadow = false;
			instancedMesh.castShadow = true;

			const largestExtent = new THREE.Box3().setFromObject(originalMesh, true).getBoundingSphere(new THREE.Sphere).radius * 2;
			const scaleFactor = (1 / largestExtent);

			for (let instanceId = 0; instanceId < instanceCounter[meshId]; ++instanceId) {
				// Order of transformation operations does not matter here
				const instanceMatrix = new THREE.Matrix4();
				instanceMatrix.setPosition(positions[meshId][instanceId].x, 0, positions[meshId][instanceId].y);

				if (!this.instancePositionMatrices[meshId]) this.instancePositionMatrices[meshId] = [];
				this.instancePositionMatrices[meshId][instanceId] = instanceMatrix;

				this.instanceSizes[meshId][instanceId].basicScaleFactor = scaleFactor;
				this.setInstanceMatrix(meshId, instanceId);
			}

			instancedMesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);
			instancedMesh.instanceMatrix.needsUpdate = true;
			this.meshGroup.add(instancedMesh);
		}

		this.threeHandler.render();
	}

	// Option setters

	public setBasicSize(basicSize: number) {
		this.basicSize = basicSize;
		this.updateInstanceMatrices();
	}

	public async setMapping(option: string, columnName: string) {
		if (this.variableMapping[option] !== undefined) this.variableMapping[option].name = columnName;
		else this.variableMapping[option] = { name: columnName, index: -1 };
		this.findIndex(option);
		await this.createScene();
	}

	public async setGlyphAtlas(glyphAtlas: GlyphAtlas) {
		this.json = glyphAtlas.json;

		if (this.guiHandler) {
			this.guiHandler.resetGui();
			this.guiHandler.addAttributes(this.json.attributes);
		}

		this.originalObjects = glyphAtlas.glyphs;
		this.sizeNormalizationFactor = 1 / glyphAtlas.largestExtent;
		await this.addMeshes();
	}

	// Helpers

	protected calculateMeshIndex(optionLine: string[]): number {
		if (!this.json) return -1;
		
		let largestIndex = -1;
		const possibleGlyphs = new Array<string>();
		
		for (const glyphType of this.json.types) {
			variantSearch:
			for (let variantIndex = 0; variantIndex < glyphType.variants.length; ++variantIndex) {
				for (const key in glyphType.variants[variantIndex]) {
					if (key === 'name') continue;
						
					if (Number(optionLine[this.variableMapping[key].index]) < Number((glyphType.variants[variantIndex] as Record<string, string>)[key])) break variantSearch;
					largestIndex = variantIndex;
				}
			}
				
			possibleGlyphs.push(glyphType.variants[largestIndex].name as string);
			largestIndex = -1;
		}

		for (let i = 0; i < this.originalObjects.length; ++i) if (this.originalObjects[i].name === possibleGlyphs[0]) return i;

		return -1;
	}

	protected updateInstanceMatrices() {
		for (let meshId = 0; meshId < this.instanceSizes.length; ++meshId) {
			if (!this.instanceSizes[meshId]) continue;

			for (let instanceId = 0; instanceId < this.instanceSizes[meshId].length; ++instanceId) {
				this.setInstanceMatrix(meshId, instanceId);
			}

			this.instancedMeshes[meshId].instanceMatrix.needsUpdate = true;
		}

		this.threeHandler.render();
	}

	protected setInstanceMatrix(meshId: number, instanceId: number) {
		const instanceMatrix = this.instancePositionMatrices[meshId][instanceId].clone();
		const scaleFactor = this.instanceSizes[meshId][instanceId].basicScaleFactor * this.basicSize * (1 + (this.instanceSizes[meshId][instanceId].variationFactor * 2 - 1) * this.maxVariation);
		instanceMatrix.scale(new THREE.Vector3(scaleFactor, scaleFactor, scaleFactor));
		this.instancedMeshes[meshId].setMatrixAt(instanceId, instanceMatrix);
	}

	protected findExtremaInCsv() {
		this.csvMin = new THREE.Vector2(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
		this.csvMax = new THREE.Vector2(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);

		for (let i = 1; i < this.csv.length; ++i) {
			const x = Number(this.csv[i][this.variableMapping['positionX'].index]);
			const y = Number(this.csv[i][this.variableMapping['positionY'].index]);

			if (x < this.csvMin.x) this.csvMin.x = x;
			if (x > this.csvMax.x) this.csvMax.x = x;
			if (y < this.csvMin.y) this.csvMin.y = y;
			if (y > this.csvMax.y) this.csvMax.y = y;
		}
	}

	protected normalizeCoordinatesToNDC(coords: THREE.Vector2) {
		return coords.clone().sub(this.csvMin).divide(this.csvMax.clone().sub(this.csvMin)).multiplyScalar(2).subScalar(1);
	}

	protected findIndex(attribute: string) {
		if (!this.csv[0]) return;
		this.variableMapping[attribute].index = this.csv[0].findIndex((value: string, index: number) => { if (value === this.variableMapping[attribute].name) return index; });
	}
}