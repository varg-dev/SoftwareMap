import * as THREE from 'three';
import {GlyphAtlas, GlyphLoader} from './GlyphLoader.ts';
import {type Mappings, MappingsUpdate} from './GuiManager.ts';
import {RenderingManager} from './RenderingManager.ts';

type CSV = Array<Array<string>>;
type CsvAndIndices = {
	csv: CSV,
	positionIndices?: THREE.Vector2
};

export class SceneManager {
	readonly scene: THREE.Scene;
	protected renderingManager: RenderingManager;

	protected staticElements: THREE.Group;
	// Use additional group to clear placed glyphs without clearing plane, lighting etc.
	protected glyphGroup: THREE.Group;

	protected _csv: CsvAndIndices | undefined;

	protected glyphAtlas: GlyphAtlas | undefined;
	protected glyphLoader: GlyphLoader;
	protected glyphToCsvMapping: Array<{ glyphIndex: number, csvRow: number }> | undefined;
	protected glyphCount: Array<number> | undefined;
	protected instancedGlyphs: Array<{ positionAttributes: Array<THREE.InstancedBufferAttribute>, meshes: Array<THREE.Mesh> }> | undefined;

	protected _mappings: Mappings | undefined;
	protected xAndYBounds: { min: THREE.Vector2, max: THREE.Vector2 } | undefined;

	constructor(renderingManager: RenderingManager) {
		this.glyphLoader = new GlyphLoader();
		this.renderingManager = renderingManager;

		this.scene = new THREE.Scene();
		this.staticElements = new THREE.Group();
		this.glyphGroup = new THREE.Group();

		this.scene.add(this.staticElements);
		this.scene.add(this.glyphGroup);

		this.setUpStaticElements();
	}

	protected setUpStaticElements(): void {
		this.scene.background = new THREE.Color(0xaaaacc);

		// Lighting
		this.staticElements.add(new THREE.AmbientLight(0xdddddd));
		const pointLight = new THREE.PointLight(0xffffff, 1, 0, 0);
		pointLight.castShadow = true;
		pointLight.shadow.mapSize = new THREE.Vector2(4096, 4096);
		pointLight.position.set(-0.5, 2, 1);
		this.staticElements.add(pointLight);

		// Grid
		const plane = new THREE.Mesh(
			new THREE.PlaneGeometry(2.25, 2.25),
			new THREE.MeshPhongMaterial({ color: 0xccccdd, side: THREE.DoubleSide })
		);
		plane.rotateX(Math.PI / 2);
		plane.translateY(-0.0001);
		plane.receiveShadow = true;
		this.staticElements.add(plane);

		const grid = new THREE.GridHelper(2.25, 100);
		grid.receiveShadow = true;
		this.staticElements.add(grid);
	}

	public set csv(value: CSV) {
		this._csv = { csv: value };

		if (this.glyphAtlas === undefined) return;
		if (this._mappings !== undefined) this.findAttributeBounds();

		this.calculateGlyphIndices();
		this.createInstancedMeshes();
	}

	protected createInstancedMeshes(): void {
		if (!this.sceneCanBeDrawn() || this.glyphToCsvMapping === undefined || this.glyphCount === undefined) return;
		if (this.xAndYBounds === undefined) this.findAttributeBounds();

		this.glyphGroup.clear();

		this.instancedGlyphs = [];
		for (const [index, count] of this.glyphCount.entries()) {
			if (count <= 0) continue;

			const glyph = this.glyphAtlas!.glyphs[index];

			const meshes = new Array<THREE.Mesh>();
			const positions = new Array<THREE.InstancedBufferAttribute>();

			if (glyph.children.length > 0) glyph.traverse((object: THREE.Object3D) => { if (object.type === 'Mesh') this.createInstancedMesh(object as THREE.Mesh, count, index, meshes, positions); });
			else if (glyph.type === 'Mesh') this.createInstancedMesh(glyph as THREE.Mesh, count, index, meshes, positions);

			this.instancedGlyphs[index] = { meshes: meshes, positionAttributes: positions };

			for (const mesh of meshes) {
				this.glyphGroup.add(mesh);
			}
		}

		this.renderingManager.requestUpdate();
	}

	protected createInstancedMesh(mesh: THREE.Mesh, count: number, glyphIndex: number, meshes: Array<THREE.Mesh>, positions: Array<THREE.InstancedBufferAttribute>): void {
		const geometry = new THREE.InstancedBufferGeometry();
		geometry.index = mesh.geometry.index;
		geometry.attributes = mesh.geometry.attributes;
		geometry.instanceCount = count;

		/*
		Create position offset buffer
		 */
		const positionOffsets = new Array<number>(count * 2);

		for (const [index, mapping] of this.glyphToCsvMapping!.entries()) {
			if (mapping.glyphIndex !== glyphIndex) continue;

			const position = this.calculatePosition(this._csv!.csv[mapping.csvRow]);
			positionOffsets[index * 2] = position.x;
			positionOffsets[index * 2 + 1] = position.y;
		}

		const positionAttribute = new THREE.InstancedBufferAttribute(new Float32Array(positionOffsets), 2);

		geometry.setAttribute('positionOffset', positionAttribute);

		const material = (mesh.material as THREE.Material).clone();
		const depthMaterial = new THREE.MeshDepthMaterial();
		const distanceMaterial = new THREE.MeshDistanceMaterial();

		const instancedMesh = new THREE.Mesh(geometry, material);
		// three.js still believes the vertices are at about (0,0,0) and will cull accordingly. Possible TODO: own frustum culling implementation
		instancedMesh.frustumCulled = false;
		instancedMesh.castShadow = true;

		const scale = this._mappings!.basicMappings.size / this.glyphAtlas!.largestExtent;
		instancedMesh.scale.set(scale, scale, scale);

		/*
		Add positional offset to materials
		 */

		const onBeforeCompile = (parameters: THREE.WebGLProgramParametersWithUniforms) => {
			parameters.uniforms['modelMatrixInverse'] = { value: instancedMesh.matrixWorld.clone().invert() };

			parameters.vertexShader = this.addPositionOffsetToShader(parameters.vertexShader);

			// console.log('Type: ', parameters.shaderType, '\n', 'Vertex shader: ', parameters.vertexShader);
		};

		material.onBeforeCompile = onBeforeCompile;
		depthMaterial.onBeforeCompile = onBeforeCompile;
		distanceMaterial.onBeforeCompile = onBeforeCompile;

		instancedMesh.customDistanceMaterial = distanceMaterial;
		instancedMesh.customDepthMaterial = depthMaterial;

		meshes.push(instancedMesh);
		positions.push(positionAttribute);
	}

	/**
	 * Inserts the given code into the given shader chunk AFTER the given insertion point string.
	 * @param shaderChunkName The name of the shader chunk to insert into
	 * @param insertionPoint A string contained in the shader chunk directly following which the code will be inserted
	 * @param code The GLSL code to insert into the shader chunk
	 * @returns The given shader chunk augmented by the given code
	 * @protected
	 */
	protected insertCodeIntoShaderChunk(shaderChunkName: keyof typeof THREE.ShaderChunk, insertionPoint: string, code: string): string {
		const shaderChunk: string = THREE.ShaderChunk[shaderChunkName];

		return shaderChunk.substring(0, shaderChunk.indexOf(insertionPoint) + insertionPoint.length)
			+ code
			+ shaderChunk.substring(shaderChunk.indexOf(insertionPoint) + insertionPoint.length);
	}

	/**
	 * Adds code enabling the position offset passed via attribute in the given GLSL shader.
	 * @param shader The shader to augment
	 * @protected
	 */
	protected addPositionOffsetToShader(shader: string): string {
		const insertionPoint = '#include <begin_vertex>';

		const shaderChunk = this.insertCodeIntoShaderChunk('begin_vertex',
			'vec3 transformed = vec3( position );\n',
			'vec4 offset = modelMatrixInverse * vec4(positionOffset.x, 0., positionOffset.y, 0.);\ntransformed += offset.xyz;\n');

		return 'attribute vec2 positionOffset;\n'
			+ 'uniform mat4 modelMatrixInverse;\n'
			+ shader.substring(0, shader.indexOf(insertionPoint))
			+ shaderChunk
			+ shader.substring(shader.indexOf(insertionPoint) + insertionPoint.length);
	}

	protected calculateGlyphIndices(): void {
		if (!this.sceneCanBeDrawn()) return;

		this.glyphToCsvMapping = new Array(this._csv!.csv.length - 1);
		this.glyphCount = new Array<number>(this.glyphAtlas!.glyphs.length).fill(0);

		for (const [index, row] of this._csv!.csv.entries()) {
			if (index === 0) continue;
			const glyphIndex = this.calculateGlyphIndex(row);
			this.glyphToCsvMapping[index - 1] = { glyphIndex: glyphIndex, csvRow: index };
			++this.glyphCount[glyphIndex];
		}
	}

	protected calculateGlyphIndex(csvRow: Array<string>): number {
		const glyphTypeSelectionColumn = this._csv!.csv[0].indexOf(this._mappings!.requiredMappings.glyphType!);
		let glyphTypeSelectionValue = Number(csvRow[glyphTypeSelectionColumn]);

		if (glyphTypeSelectionValue === undefined) {
			console.error('The column selected for glyphType (' + this._mappings!.requiredMappings.glyphType! + ') contains at least one value that cannot be casted to a number: ' + csvRow[glyphTypeSelectionColumn]);
			return -1;
		}
		if (glyphTypeSelectionValue !== Math.round(glyphTypeSelectionValue)) {
			console.warn('The value given as glyphType is not integer (' + glyphTypeSelectionValue + '). Because of this, the value has been rounded.');
			glyphTypeSelectionValue = Math.round(glyphTypeSelectionValue);
		}
		// If more distinct values of the csv column mapped to glyphType exist (or the values are too large), we wrap around (while preventing NaN)
		if (this.glyphAtlas?.json.types.length === 1) {
			console.warn('The selected glyph atlas only provides one type of glyph. The mapping of glyphType has no effect.');
			glyphTypeSelectionValue = 0;
		}
		else if (glyphTypeSelectionValue >= this.glyphAtlas!.json.types.length) {
			console.warn('The value used to select the glyph type (' + glyphTypeSelectionValue + ') is larger than the amount of available types. This value will be wrapped around.');
			glyphTypeSelectionValue %= this.glyphAtlas!.json.types.length - 1;
		}

		let largestValidVariantIndex = -1;

		const glyphType = this.glyphAtlas!.json.types[glyphTypeSelectionValue];
		for (const [index, variant] of glyphType.variants.entries()) {
			let variantIsValid = true;

			for (const [key, value] of Object.entries(variant)) {
				if (key === 'name') continue;
				if (this._mappings!.optionalMappings[key] === undefined) continue;

				if (Number(csvRow[csvRow.indexOf(this._mappings!.optionalMappings[key])]) < (value as number)) {
					variantIsValid = false;
					break;
				}
			}

			if (variantIsValid) largestValidVariantIndex = index;
		}

		let selectedGlyphName = '';

		if (largestValidVariantIndex === -1) {
			console.warn('No valid variant could be found for the current row ' + csvRow + '. The base model of the selected type will be used.');
			selectedGlyphName = glyphType.baseModel;
		} else {
			selectedGlyphName = glyphType.variants[largestValidVariantIndex].name;
		}

		return this.glyphAtlas!.glyphs.findIndex((value: THREE.Object3D) => { return selectedGlyphName === value.name; } );
	}

	protected findAttributeBounds(): void {
		if (this._csv === undefined || this._mappings === undefined) return;

		this.xAndYBounds = {
			min: new THREE.Vector2(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY),
			max: new THREE.Vector2(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY)
		};

		this._csv.positionIndices = new THREE.Vector2(this._csv.csv[0].indexOf(this._mappings.requiredMappings.positionX), this._csv.csv[0].indexOf(this._mappings.requiredMappings.positionY));

		for (const [index, row] of this._csv.csv.entries()) {
			if (index === 0) continue;

			const x = Number(row[this._csv.positionIndices.x]);
			const y = Number(row[this._csv.positionIndices.y]);

			if (x < this.xAndYBounds.min.x) this.xAndYBounds.min.x = x;
			if (x > this.xAndYBounds.max.x) this.xAndYBounds.max.x = x;
			if (y < this.xAndYBounds.min.y) this.xAndYBounds.min.y = y;
			if (y > this.xAndYBounds.max.y) this.xAndYBounds.max.y = y;
		}
	}

	protected calculatePosition(csvRow: Array<string>): THREE.Vector2 {
		const position = new THREE.Vector2(Number(csvRow[this._csv!.positionIndices!.x]), Number(csvRow[this._csv!.positionIndices!.y]));
		position.sub(this.xAndYBounds!.min).divide(this.xAndYBounds!.max.clone().sub(this.xAndYBounds!.min)).multiplyScalar(2).subScalar(1);
		return position;
	}

	protected sceneCanBeDrawn(): boolean {
		return (
			this._csv !== undefined
            && this._csv.csv[0].length !== 0
            && this._mappings !== undefined
            && this._mappings.basicMappings.glyphAtlas !== ''
            && this._mappings.requiredMappings.positionX !== ''
            && this._mappings.requiredMappings.positionY !== ''
            && this._mappings.requiredMappings.glyphType !== ''
            && this.glyphAtlas !== undefined
		);
	}

	public set mappings(value: Mappings) {
		this._mappings = value;

		if (this._csv !== undefined) this.findAttributeBounds();

		this.calculateGlyphIndices();
		this.createInstancedMeshes();
	}

	public async update(value: MappingsUpdate): Promise<void> {
		if (value.labelSettings?.labelSize) {
			// PickingManager stuff...
		}
		if (value.labelSettings?.labelOffset) {
			// PickingManager stuff...
		}
		if (value.basicMappings?.size) {
			// Scale stuff...
		}
		if (value.basicMappings?.glyphAtlas) {
			if (this._mappings?.basicMappings.glyphAtlas !== undefined) {
				const possibleGlyphAtlas = await this.glyphLoader.getGlyphAtlas(this._mappings?.basicMappings.glyphAtlas + '.json');
				if (possibleGlyphAtlas !== null) this.glyphAtlas = possibleGlyphAtlas;
			}
			this.calculateGlyphIndices();
			this.createInstancedMeshes();
		}
		if (value.requiredMappings?.positionX || value.requiredMappings?.positionY) {
			this.createInstancedMeshes();
		}
		if (value.requiredMappings?.glyphType) {
			this.calculateGlyphIndices();
			this.createInstancedMeshes();
		}
		if (value.optionalMappings !== undefined) {
			this.calculateGlyphIndices();
			this.createInstancedMeshes();
		}
	}
}