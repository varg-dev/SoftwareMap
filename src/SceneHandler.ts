import * as THREE from 'three';
import {RenderingManager} from './RenderingManager.ts';
import {GlyphAtlas, GlyphJson} from './GlyphLoader.ts';
import {GuiManager} from './GuiManager.ts';
import {PickingHandler} from './PickingHandler.ts';

type MeshData = {
	meshes: Array<{
		mesh: THREE.InstancedMesh,
		colors: Array<THREE.Color>,
		positionMatrices: Array<THREE.Matrix4>
	}>,
	csvRow: Array<number>
};

type CSV = Array<Array<string>>;

export class SceneHandler {
	readonly threeHandler: RenderingManager;
	public guiHandler: GuiManager | undefined;
	public pickingHandler: PickingHandler;

	readonly scene: THREE.Scene;
	protected meshGroup: THREE.Group;

	protected json: GlyphJson | undefined;

	protected originalObjects: Array<THREE.Object3D>;
	public instancedMeshes: Array<MeshData>;
	protected sizeNormalizationFactor: number;
	public indexToMeshIdMapper: Map<number, number>;

	protected variableMapping: Record<string, { name: string, index: number }>;

	protected basicSize: number;

	protected _csv: CSV;
	protected csvMin: THREE.Vector2;
	protected csvMax: THREE.Vector2;
	protected distinctValues: Array<number>;

	constructor(threeHandler: RenderingManager) {
		this.threeHandler = threeHandler;

		this._csv = [];
		this.csvMin = new THREE.Vector2(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
		this.csvMax = new THREE.Vector2(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
		this.distinctValues = [];

		this.originalObjects = [];
		this.instancedMeshes = [];
		this.indexToMeshIdMapper = new Map<number, number>();
		this.sizeNormalizationFactor = 1;

		this.basicSize = 0.1;

		this.variableMapping = {};

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

		// Use additional group to clear placed glyphs without clearing plane, lighting etc.
		this.meshGroup = new THREE.Group();
		this.scene.add(this.meshGroup);

		this.pickingHandler = new PickingHandler(this.meshGroup, this);
	}

	public async createScene(): Promise<void> {
		this.clearScene();

		if (Object.keys(this.variableMapping).length !== 0 && this.requiredMappingsExist()) {
			await this.addMeshes();
			this.threeHandler.requestUpdate();
		}
	}

	protected async addMeshes(): Promise<void> {
		/*
		 * Find how many instances of each Mesh are required and where they should be placed.
		 */
		const instanceCounter = new Array<number>(this.originalObjects.length);
		const positions = new Array<Array<THREE.Vector2>>(this.originalObjects.length);
		for (let i = 0; i < this._csv.length - 1; ++i) {
			// First line of csv contains column names
			const csvIndex = i + 1;

			const meshIndex = this.calculateMeshIndex(this._csv[csvIndex]);
			switch (meshIndex) {
			case -1:
				console.warn('Select a glyph atlas first!');
				return;
			case -2:
				console.warn('Select a mapping for glyphType first!');
				return;
			case -3:
				console.warn('The mapping of glyphType does not exist!');
				return;
			case -4:
				console.warn('No glyph could be found that satisfies the requirements for the following line:\n' + this._csv[csvIndex]);
				break;
			case -5:
				console.error('The chosen glyph in the glyph atlas does not actually exist!');
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
			positions[meshIndex].push(this.normalizeCoordinatesToNDC(new THREE.Vector2(Number(this._csv[csvIndex][xIndex]), Number(this._csv[csvIndex][yIndex]))));

			if (this.instancedMeshes[meshIndex] === undefined) this.instancedMeshes[meshIndex] = {meshes: [], csvRow: []};
			this.instancedMeshes[meshIndex].csvRow.push(csvIndex);
		}

		/*
		 * Create an InstancedMesh from each Mesh loaded from the GLTF, as well as position and scale their instances.
		 */
		for (let meshId = 0; meshId < this.originalObjects.length; ++meshId) {
			const originalObject = this.originalObjects[meshId];

			if (instanceCounter[meshId] === 0 || instanceCounter[meshId] === undefined) continue;
			for (let childMeshId = 0; childMeshId < originalObject.children.length; ++childMeshId) {
				const child = originalObject.children[childMeshId];

				if (child instanceof THREE.Group) {
					for (let groupChildId = 0; groupChildId < child.children.length; ++groupChildId) {
						this.makeInstancedMesh(child.children[groupChildId] as THREE.Mesh, instanceCounter, meshId, positions);
					}
				} else if (child instanceof THREE.Mesh) {
					this.makeInstancedMesh(child, instanceCounter, meshId, positions);
				} else {
					console.error('The glyph atlas you have selected does not have a valid form.');
				}
			}
		}

		this.updateInstanceMatrices();
	}

	private makeInstancedMesh(mesh: THREE.Mesh, instanceCounter: number[], meshId: number, positions: Array<THREE.Vector2>[]) {
		const geometry = mesh.geometry;
		const material = mesh.material;

		const instancedMesh = new THREE.InstancedMesh(geometry, material, instanceCounter[meshId]);
		instancedMesh.receiveShadow = false;
		instancedMesh.castShadow = true;

		this.indexToMeshIdMapper.set(instancedMesh.id, meshId);
		const positionMatrices = new Array<THREE.Matrix4>(instanceCounter[meshId]);

		for (let instanceId = 0; instanceId < instanceCounter[meshId]; ++instanceId) {
			// Order of transformation operations does not matter here
			const instanceMatrix = new THREE.Matrix4();
			instanceMatrix.setPosition(positions[meshId][instanceId].x, 0, positions[meshId][instanceId].y);

			positionMatrices[instanceId] = instanceMatrix;
		}

		this.instancedMeshes[meshId].meshes.push({mesh: instancedMesh, colors: new Array<THREE.Color>(), positionMatrices: positionMatrices});
		this.meshGroup.add(instancedMesh);
	}

	// Option setters

	public async setCsv(csv: CSV): Promise<void> {
		this._csv = csv;
		if (this._csv.length === 0) {
			console.error('Cannot create scene from empty csv!');
			return;
		}
		this.countDistinctValuesInCsv();
		this.findExtremaInCsv();
		await this.createScene();

		if (this.guiHandler !== undefined) this.guiHandler.componentStatus = { basicMappings: true };
	}

	public setBasicSize(basicSize: number) {
		this.basicSize = basicSize;
		this.updateInstanceMatrices();
	}

	public async setMapping(option: string, columnName: string, createScene = false) {
		this.variableMapping[option] = {name: columnName, index: -1};

		if (columnName === '') {
			if (this.guiHandler !== undefined && !this.requiredMappingsExist()) {
				this.guiHandler.componentStatus = { optionalMappings: false };
			}
		} else {
			if (this.requiredMappingsExist() && this.guiHandler !== undefined) this.guiHandler.componentStatus = { optionalMappings: true };

			if (this.currentMappingsAreInvalid()) return;
			this.findIndex(option);

			if (option === 'glyphType' && this.json !== undefined && this.distinctValues[this.variableMapping[option].index] > this.json.types.length) {
				alert(`The column mapped to glyphType has more distinct values (${this.distinctValues[this.variableMapping[option].index]}) than the chosen glyph atlas has glyph types (${this.json.types.length}). This will cause the glyph type to wrap around whenever the index is greater than the amount of glyphs.`);
			} else if ((option === 'positionX' || option === 'positionY') && this._csv.length !== 0) {
				this.findExtremaInCsv();
			}
		}

		if (createScene) await this.createScene();
	}

	public async setGlyphAtlas(glyphAtlas: GlyphAtlas) {
		this.json = glyphAtlas.json;

		if (this.guiHandler) {
			this.guiHandler.componentStatus = { requiredMappings: true, optionalMappings: false };
			this.guiHandler.glyphAtlasAxes = this.json.attributes;
		}

		this.originalObjects = glyphAtlas.glyphs;
		this.sizeNormalizationFactor = 1 / glyphAtlas.largestExtent;

		if (this.requiredMappingsExist() && this.guiHandler !== undefined) this.guiHandler.componentStatus = { optionalMappings: true };

		await this.createScene();
	}

	// Helpers

	/**
	 *
	 * @param optionLine
	 * @return The index of the mesh to use, if it exists. Otherwise:
	 * <ul>
	 * <li>-1 if json has not yet been set,
	 * <li>-2 if no mapping for glyphType exists,
	 * <li>-3 if the mapping provided does not exist,
	 * <li>-4 if no glyph could be found for this line,
	 * <li>-5 if the chosen mesh does not exist.
	 * </ul>
	 * @protected
	 */
	protected calculateMeshIndex(optionLine: string[]): number {
		if (this.json === undefined) return -1;

		let largestIndex = -1;

		if (!this.mappingExists('glyphType')) return -2;
		const glyphTypeMapping = this.variableMapping['glyphType'];
		const glyphTypeIndex = glyphTypeMapping.index;
		if (glyphTypeIndex === -1) return -3;
		const originalValue = Number(optionLine[glyphTypeIndex]);
		let glyphTypeValue = Math.floor(originalValue);
		if (originalValue !== glyphTypeValue) console.warn('The attribute mapped to "Glyph type" is not integer and as such will be rounded.');

		// if more distinct values of the csv column mapped to glyphType exist, we wrap around (while preventing NaN)
		if (this.json.types.length === 1) glyphTypeValue = 0;
		else glyphTypeValue = glyphTypeValue % (this.json.types.length - 1);

		const glyphType = this.json.types[glyphTypeValue];
		for (let variantIndex = 0; variantIndex < glyphType.variants.length; ++variantIndex) {
			let variantIsValid = true;

			for (const key in glyphType.variants[variantIndex]) {
				if (key === 'name') continue;

				if ((glyphType.variants[variantIndex] as Record<string, string>)[key] === undefined
					|| !this.mappingExists(key)) continue;
				if (Number(optionLine[this.variableMapping[key].index]) < Number((glyphType.variants[variantIndex] as Record<string, string>)[key])) {
					variantIsValid = false;
					break;
				}
			}

			if (variantIsValid) largestIndex = variantIndex;
		}

		if (largestIndex === -1) return -4;

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

		this.threeHandler.requestUpdate();
	}

	protected setInstanceMatrix(meshId: number, childMeshId: number, instanceId: number): void {
		const matrix = this.instancedMeshes[meshId].meshes[childMeshId].positionMatrices[instanceId].clone();

		const scalingFactor = this.sizeNormalizationFactor * this.basicSize;

		matrix.scale(new THREE.Vector3(scalingFactor, scalingFactor, scalingFactor));
		this.instancedMeshes[meshId].meshes[childMeshId].mesh.setMatrixAt(instanceId, matrix);

		this.instancedMeshes[meshId].meshes[childMeshId].mesh.instanceMatrix.needsUpdate = true;
	}

	protected findExtremaInCsv() {
		if (this.currentMappingsAreInvalid()) return;

		this.csvMin = new THREE.Vector2(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
		this.csvMax = new THREE.Vector2(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);

		if (!this.mappingExists('positionX') || !this.mappingExists('positionY')) return;

		const xMapping = this.variableMapping['positionX'];
		const yMapping = this.variableMapping['positionY'];

		for (let i = 1; i < this._csv.length; ++i) {
			const x = Number(this._csv[i][xMapping.index]);
			const y = Number(this._csv[i][yMapping.index]);

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
		if (this._csv[0] === undefined) return;
		this.variableMapping[attribute].index = this._csv[0].findIndex((value: string, index: number) => {
			if (value === this.variableMapping[attribute].name) return index;
		});
	}

	protected countDistinctValuesInCsv(): void {
		const sets = new Array<Set<string>>(this._csv[0].length);
		for (let i = 0; i < sets.length; ++i) {
			sets[i] = new Set<string>();
		}

		for (let line = 1; line < this._csv.length; ++line) {
			for (let attribute = 0; attribute < sets.length; ++attribute) {
				sets[attribute].add(this._csv[line][attribute]);
			}
		}

		for (let i = 0; i < sets.length; ++i) {
			this.distinctValues[i] = sets[i].size;
		}
	}

	protected currentMappingsAreInvalid(): boolean {
		let invalidMappings = '';

		for (const variableMappingKey in this.variableMapping) {
			this.findIndex(variableMappingKey);
			if (this.variableMapping[variableMappingKey].index === -1 && this.variableMapping[variableMappingKey].name !== '') invalidMappings += ('\t' + variableMappingKey + ' -> ' + this.variableMapping[variableMappingKey].name + '\n');
		}

		if (invalidMappings.length !== 0) {
			let messageString = 'The following mappings don\'t exist in the currently loaded csv:\n' + invalidMappings + '\nThese columns exist:\n';

			for (let i = 0; i < this._csv[0].length; ++i) messageString += ('\t' + this._csv[0][i] + '\n');

			console.error(messageString);
			return true;
		}

		return false;
	}

	protected mappingExists(attribute: string): boolean {
		return this.variableMapping[attribute] !== undefined && this.variableMapping[attribute].name !== '';
	}

	protected requiredMappingsExist(): boolean {
		return this.mappingExists('positionX') && this.mappingExists('positionY') && this.mappingExists('glyphType');
	}

	protected clearScene(): void {
		this.instancedMeshes = new Array<MeshData>(this.originalObjects.length);
		this.meshGroup.clear();
		this.threeHandler.requestUpdate();
	}

	public get csv() { return this._csv; }
}