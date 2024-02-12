import * as THREE from 'three';
import {ThreeHandler} from './ThreeHandler.ts';
import {GlyphAtlas, GlyphJson} from './GlyphLoader.ts';
import {GuiHandler} from './GuiHandler.ts';
import {Color} from 'three';

type MeshData = {
	meshes: Array<{
		mesh: THREE.InstancedMesh,
		colors: Array<THREE.Color>,
		positionMatrices: Array<THREE.Matrix4>
	}>
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
	protected distinctValues: Array<number>;

	constructor(threeHandler: ThreeHandler) {
		this.threeHandler = threeHandler;

		this.csv = [];
		this.csvMin = new THREE.Vector2(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
		this.csvMax = new THREE.Vector2(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
		this.distinctValues = [];

		this.originalObjects = [];
		this.instancedMeshes = [];
		this.sizeNormalizationFactor = 1;

		this.basicSize = 0.1;

		this.variableMapping = {
			positionX: { name: '', index: -1 },
			positionY: { name: '', index: -1 },
			glyphType: { name: '', index: -1 }
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
		if (csv) this.countDistinctValuesInCsv();

		let invalidMappings = '';

		for (const variableMappingKey in this.variableMapping) {
			this.findIndex(variableMappingKey);
			if (this.variableMapping[variableMappingKey].index === -1) invalidMappings += ('\t' + variableMappingKey + ' -> ' + this.variableMapping[variableMappingKey].name + '\n');
		}

		if (invalidMappings.length !== 0) {
			let messageString = 'The following mappings don\'t exist in the currently loaded csv:\n' + invalidMappings + '\nThese columns exist:\n';

			for (let i = 0; i < this.csv[0].length; ++i) messageString += ('\t' + this.csv[0][i] + '\n');

			alert(messageString);
			return;
		}

		if (csv) this.findExtremaInCsv();

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
			if (meshIndex === -1) {
				console.warn('Select a mapping for glyphType!');
				return;
			}

			if (instanceCounter[meshIndex] === undefined) instanceCounter[meshIndex] = 0;
			++instanceCounter[meshIndex];

			const xIndex = this.variableMapping['positionX'].index;
			const yIndex = this.variableMapping['positionY'].index;

			if (xIndex === -1 || yIndex === -1) {
				console.warn('Select a mapping for positionX and positionY!');
				return;
			}

			if (positions[meshIndex] === undefined) positions[meshIndex] = [];
			positions[meshIndex].push(this.normalizeCoordinatesToNDC(new THREE.Vector2(Number(this.csv[csvIndex][xIndex]), Number(this.csv[csvIndex][yIndex]))));
		}

		/*
		 * Create an InstancedMesh from each Mesh loaded from the GLTF, as well as position and scale their instances.
		 */
		for (let meshId = 0; meshId < this.originalObjects.length; ++meshId) {
			const originalObject = this.originalObjects[meshId];

			if (instanceCounter[meshId] === 0 || instanceCounter[meshId] === undefined) continue;
			for (let childMeshId = 0; childMeshId < originalObject.children.length; ++childMeshId) {
				const mesh = originalObject.children[childMeshId] as THREE.Mesh;

				const geometry = mesh.geometry;
				const material = mesh.material;

				const instancedMesh = new THREE.InstancedMesh(geometry, material, instanceCounter[meshId]);
				instancedMesh.receiveShadow = false;
				instancedMesh.castShadow = true;

				const positionMatrices = new Array<THREE.Matrix4>(instanceCounter[meshId]);

				for (let instanceId = 0; instanceId < instanceCounter[meshId]; ++instanceId) {
					// Order of transformation operations does not matter here
					const instanceMatrix = new THREE.Matrix4();
					instanceMatrix.setPosition(positions[meshId][instanceId].x, 0, positions[meshId][instanceId].y);

					positionMatrices[instanceId] = instanceMatrix;
				}

				if (this.instancedMeshes[meshId] === undefined) {
					this.instancedMeshes[meshId] = { meshes: [] };
				}
				this.instancedMeshes[meshId].meshes.push({ mesh: instancedMesh, colors: new Array<Color>(), positionMatrices: positionMatrices });
				this.meshGroup.add(instancedMesh);
			}
		}

		this.updateInstanceMatrices();

		this.threeHandler.render();
	}

	// Option setters

	public setBasicSize(basicSize: number) {
		this.basicSize = basicSize;
		this.updateInstanceMatrices();
	}

	public async setMapping(option: string, columnName: string, createScene = false) {
		if (this.variableMapping[option] !== undefined) this.variableMapping[option].name = columnName;
		else this.variableMapping[option] = { name: columnName, index: -1 };
		this.findIndex(option);

		if (option === 'glyphType' && this.json && this.distinctValues[this.variableMapping[option].index] > this.json.types.length) {
			alert(`The column mapped to glyphType has more distinct values (${this.distinctValues[this.variableMapping[option].index]}) than the chosen glyph atlas has glyph types (${this.json.types.length}). This will cause the glyph type to wrap around whenever the index is greater than the amount of glyphs.`);
		} else if ((option === 'positionX' || option === 'positionY') && this.csv.length !== 0) {
			this.findExtremaInCsv();
		}

		if (createScene) await this.createScene();
	}

	public async setGlyphAtlas(glyphAtlas: GlyphAtlas) {
		this.json = glyphAtlas.json;

		if (this.guiHandler) {
			this.guiHandler.resetGui();
			this.guiHandler.addAttributes(this.json.attributes);
		}

		this.variableMapping = {};
		this.originalObjects = glyphAtlas.glyphs;
		this.sizeNormalizationFactor = 1 / glyphAtlas.largestExtent;
		await this.createScene();
	}

	// Helpers

	protected calculateMeshIndex(optionLine: string[]): number {
		if (this.json === undefined) return -1;
		
		let largestIndex = -1;

		const glyphTypeIndex = this.variableMapping['glyphType'].index;
		if (glyphTypeIndex === -1) return -1;
		const glyphTypeValue = Number(optionLine[glyphTypeIndex]);
		
		const glyphType = this.json.types[glyphTypeValue % (this.json.types.length - 1)];
		for (let variantIndex = 0; variantIndex < glyphType.variants.length; ++variantIndex) {
			let variantIsValid = true;

			for (const key in glyphType.variants[variantIndex]) {
				if (key === 'name') continue;
				if (this.variableMapping[key] === undefined) return -1;

				if ((glyphType.variants[variantIndex] as Record<string, string>)[key] === undefined) continue;
				if (Number(optionLine[this.variableMapping[key].index]) < Number((glyphType.variants[variantIndex] as Record<string, string>)[key])) {
					variantIsValid = false;
					break;
				}
			}

			if (variantIsValid) largestIndex = variantIndex;
		}

		if (largestIndex === -1) {
			console.warn('No glyph could be found that satisfies the requirements for the following line:\n' + optionLine);
			return -1;
		}

		for (let i = 0; i < this.originalObjects.length; ++i) if (this.originalObjects[i].name === glyphType.variants[largestIndex].name as string) return i;

		return -1;
	}

	protected updateInstanceMatrices(): void {
		for (let meshId = 0; meshId < this.instancedMeshes.length; ++meshId) {
			if (this.instancedMeshes[meshId] === undefined) continue;
			const meshes = this.instancedMeshes[meshId].meshes;

			for (let childMeshId = 0; childMeshId < meshes.length; ++childMeshId) {
				const mesh = meshes[childMeshId];

				mesh.mesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);

				for (let instanceId = 0; instanceId < mesh.positionMatrices.length; ++instanceId) {
					this.setInstanceMatrix(meshId, childMeshId, instanceId);
				}
			}
		}

		this.threeHandler.render();
	}

	protected setInstanceMatrix(meshId: number, childMeshId: number, instanceId: number): void {
		const matrix = this.instancedMeshes[meshId].meshes[childMeshId].positionMatrices[instanceId].clone();
		matrix.scale(new THREE.Vector3(this.sizeNormalizationFactor, this.sizeNormalizationFactor, this.sizeNormalizationFactor));
		this.instancedMeshes[meshId].meshes[childMeshId].mesh.setMatrixAt(instanceId, matrix);

		this.instancedMeshes[meshId].meshes[childMeshId].mesh.instanceMatrix.needsUpdate = true;
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
		if (this.csv[0] === undefined) return;
		this.variableMapping[attribute].index = this.csv[0].findIndex((value: string, index: number) => { if (value === this.variableMapping[attribute].name) return index; });
	}

	protected countDistinctValuesInCsv(): void {
		const sets = new Array<Set<string>>(this.csv[0].length);
		for (let i = 0; i < sets.length; ++i) {
			sets[i] = new Set<string>();
		}

		for (let line = 1; line < this.csv.length; ++line) {
			for (let attribute = 0; attribute < sets.length; ++attribute) {
				sets[attribute].add(this.csv[line][attribute]);
			}
		}

		for (let i = 0; i < sets.length; ++i) {
			this.distinctValues[i] = sets[i].size;
		}
	}
}