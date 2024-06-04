import * as THREE from 'three';
import {GlyphAtlas, GlyphLoader} from './GlyphLoader.ts';
import {type Mappings, MappingsUpdate} from './GuiManager.ts';
import {RenderingManager} from './RenderingManager.ts';
import {PickingHandler} from "./PickingHandler.ts";

export type CSV = Array<Array<string>>;
type CsvAndIndices = {
	csv: CSV,
	positionIndices?: THREE.Vector2
};
export enum InstancingMethod {
	//None,
	InstancedMesh,
	InstancedBufferGeometry
}

export class SceneManager {
	readonly scene: THREE.Scene;
	readonly renderingManager: RenderingManager;
	protected glyphLoader: GlyphLoader;
	protected pickingHandler: PickingHandler;

	protected staticElements: THREE.Group;
	protected spotLight!: THREE.SpotLight;
	// Use additional group to clear placed glyphs without clearing plane, lighting etc.
	protected glyphGroup: THREE.Group;

	protected _csv: CsvAndIndices | undefined;

	protected _glyphAtlas: GlyphAtlas | undefined;
	protected glyphToCsvMapping: Array<{ glyphIndices: Array<number>, csvRow: number }> | undefined;
	protected glyphCount: Array<number> | undefined;
	protected instancedGlyphs: Array<{ positionAttributes: Array<THREE.InstancedBufferAttribute>, meshes: Array<THREE.Mesh> }> | undefined;
	protected materials: Array<THREE.Material> | undefined;

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

		this.pickingHandler = new PickingHandler(this);
	}

	protected setUpStaticElements(): void {
		this.scene.background = new THREE.Color(0xaaaacc);

		// Lighting
		this.staticElements.add(new THREE.AmbientLight(0xdddddd));
		this.spotLight = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 2.1, 0, 0);
		this.spotLight.castShadow = true;
		const shadowMapResolution = 2 ** 13;
		this.spotLight.shadow.mapSize.set(shadowMapResolution, shadowMapResolution);
		this.spotLight.position.set(-2, 2, 2);
		this.spotLight.lookAt(new THREE.Vector3(0, 0, 0));
		this.spotLight.shadow.camera.near = 0.01;
		this.spotLight.shadow.camera.far = 10;
		this.staticElements.add(this.spotLight);

		// Materials must have second output if the RenderTarget has two attached textures
		const staticElementOnBeforeCompile = (parameters: THREE.WebGLProgramParametersWithUniforms) => {
			const insertionPoint = parameters.fragmentShader.indexOf('}');
			parameters.fragmentShader =
				'layout(location = 1) out vec4 id;\n'
				+ parameters.fragmentShader.substring(0, insertionPoint)
				+ 'id = vec4(vec3(0.), 1.);\n'
				+ parameters.fragmentShader.substring(insertionPoint);
		};

		// Grid
		const plane = new THREE.Mesh(
			new THREE.PlaneGeometry(2.25, 2.25),
			new THREE.MeshPhongMaterial({ color: 0xccccdd, side: THREE.DoubleSide })
		);
		plane.rotateX(Math.PI / 2);
		plane.translateY(-0.0001);
		plane.receiveShadow = true;
		plane.material.onBeforeCompile = staticElementOnBeforeCompile;
		this.staticElements.add(plane);

		const grid = new THREE.GridHelper(2.25, 100);
		grid.receiveShadow = true;
		grid.material.onBeforeCompile = staticElementOnBeforeCompile;
		this.staticElements.add(grid);

		// Black background for id texture
		const backgroundMaterial = new THREE.RawShaderMaterial({
			vertexShader: `
			in vec3 position;
			
			void main() {
				gl_Position = vec4(position.xy, 1., 1.);
			}
			`,
			fragmentShader: `
			precision highp float;
			precision highp int;

			layout(location = 0) out vec4 color; // not used
			layout(location = 1) out vec4 id;
			
			void main() {
				id = vec4(vec3(0.), 1.);
				color = vec4(vec3(0.), 0.);
			}
			`,
			glslVersion: THREE.GLSL3
		});
		const background = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), backgroundMaterial);
		this.staticElements.add(background);
	}

	public set csv(value: CSV) {
		this._csv = { csv: value };

		if (this._glyphAtlas === undefined) return;
		if (this._mappings !== undefined) this.findAttributeBounds();

		this.calculateIndicesForGlyphs();
		this.createInstancedMeshes();
	}

	public get csv(): CSV | undefined {
		if (this._csv === undefined) return undefined;

		return this._csv.csv;
	}

	protected createInstancedMeshes(): void {
		if (!this.sceneCanBeDrawn() || this.glyphToCsvMapping === undefined || this.glyphCount === undefined) return;
		if (this.xAndYBounds === undefined) this.findAttributeBounds();

		this.disposeObject3D(this.glyphGroup);
		this.glyphGroup.clear();
		this.materials = [];

		this.instancedGlyphs = [];
		for (const [index, count] of this.glyphCount.entries()) {
			if (count <= 0) continue;

			const glyph = this._glyphAtlas!.glyphs[index];

			const meshes = new Array<THREE.Mesh>();
			const positions = new Array<THREE.InstancedBufferAttribute>();

			if (glyph.children.length > 0) glyph.traverse((object: THREE.Object3D) => { if (object.type === 'Mesh') this.createInstancedMesh(object as THREE.Mesh, count, index, meshes, positions, this._mappings!.instancingMethod); });
			else if (glyph.type === 'Mesh') this.createInstancedMesh(glyph as THREE.Mesh, count, index, meshes, positions, this._mappings!.instancingMethod);

			this.instancedGlyphs[index] = { meshes: meshes, positionAttributes: positions };

			for (const mesh of meshes) {
				this.glyphGroup.add(mesh);
			}
		}

		this.renderingManager.requestUpdate();
	}

	protected createInstancedMesh(mesh: THREE.Mesh, count: number, glyphIndex: number, meshes: Array<THREE.Mesh>, positions: Array<THREE.InstancedBufferAttribute>, instancingMethod: InstancingMethod): void {
		let geometry: THREE.BufferGeometry | THREE.InstancedBufferGeometry;
		if (instancingMethod === InstancingMethod.InstancedMesh) geometry = new THREE.BufferGeometry();
		else if (instancingMethod === InstancingMethod.InstancedBufferGeometry) geometry = new THREE.InstancedBufferGeometry();
		else return;

		geometry.index = mesh.geometry.index!.clone();
		// If all glyphs in the selected atlas have the same geometry, mesh.geometry is the same object for all colors. This requires a deep-ish copy to not override the attributes set for previous iterations.
		geometry.attributes = { ...mesh.geometry.attributes };
		if (geometry instanceof THREE.InstancedBufferGeometry) geometry.instanceCount = count;

		const material = (mesh.material as THREE.Material).clone();
		material.customProgramCacheKey = () => { return 'lod_' + glyphIndex; };
		const depthMaterial = new THREE.MeshDepthMaterial();
		const distanceMaterial = new THREE.MeshDistanceMaterial();

		let instancedMesh: THREE.InstancedMesh | THREE.Mesh;
		if (instancingMethod === InstancingMethod.InstancedMesh) {
			instancedMesh = new THREE.InstancedMesh(geometry, material, count);
			(instancedMesh as THREE.InstancedMesh).instanceMatrix.usage = THREE.StaticDrawUsage;
		}
		else if (instancingMethod === InstancingMethod.InstancedBufferGeometry) instancedMesh = new THREE.Mesh(geometry, material);
		else return;

		const scale = this._mappings!.basicMappings.size / this._glyphAtlas!.largestExtent;
		if (instancingMethod === InstancingMethod.InstancedBufferGeometry) instancedMesh.scale.set(scale, scale, scale);

		/*
		Create position offset and LoD buffers
		 */
		const positionOffsets = new Float32Array(count * 2);
		const lods = new Float32Array(count);
		const maxLods = new Float32Array(count);
		const ids = new Float32Array(count);

		let arrayIndex = 0;
		for (const mapping of this.glyphToCsvMapping!) {
			const lod = mapping.glyphIndices.indexOf(glyphIndex);
			if (lod == -1) continue;

			const position = this.calculatePosition(this._csv!.csv[mapping.csvRow]);
			positionOffsets[arrayIndex * 2] = position.x;
			positionOffsets[arrayIndex * 2 + 1] = position.y;

			if (instancedMesh instanceof THREE.InstancedMesh) {
				const instanceMatrix = new THREE.Matrix4().setPosition(position.x, 0, position.y).scale(new THREE.Vector3(scale, scale, scale));
				instancedMesh.setMatrixAt(arrayIndex, instanceMatrix);
			}

			lods[arrayIndex] = lod;
			maxLods[arrayIndex] = mapping.glyphIndices.length - 1;
			ids[arrayIndex] = mapping.csvRow;

			++arrayIndex;
		}

		const positionAttribute = new THREE.InstancedBufferAttribute(positionOffsets, 2);
		const lodAttribute = new THREE.InstancedBufferAttribute(lods, 1,);
		const maxLodAttribute = new THREE.InstancedBufferAttribute(maxLods, 1);
		const idAttribute = new THREE.InstancedBufferAttribute(ids, 1);
		geometry.setAttribute('positionOffset', positionAttribute);
		geometry.setAttribute('lod', lodAttribute);
		geometry.setAttribute('maxLod', maxLodAttribute);
		geometry.setAttribute('idAttribute', idAttribute);

		// If InstancedBufferGeometry is used: three.js still believes the vertices are at about (0,0,0) and will cull accordingly. Possible TODO: own frustum culling implementation
		if (instancingMethod === InstancingMethod.InstancedBufferGeometry) instancedMesh.frustumCulled = false;
		instancedMesh.castShadow = true;

		/*
		Add positional offset to materials
		 */

		material.userData = { lodThreshold: { value: this._mappings!.lodThreshold } };
		depthMaterial.userData = { lodThreshold: { value: this._mappings!.lodThreshold } };
		distanceMaterial.userData = { lodThreshold: { value: this._mappings!.lodThreshold } };

		const onBeforeCompileMaterial = (parameters: THREE.WebGLProgramParametersWithUniforms) => {
			parameters.uniforms['lodThreshold'] = material.userData.lodThreshold;

			parameters.vertexShader = this.addPositionOffsetAndLoDToShader(parameters.vertexShader, false, instancingMethod);

			const insertionPoint = parameters.fragmentShader.indexOf('}');
			parameters.fragmentShader =
				'varying float idPass;\n'
				+ 'layout(location = 1) out vec4 id;\n'
				+ parameters.fragmentShader.substring(0, insertionPoint)
				+ 'id = vec4(vec3(idPass), 1.);\n'
				+ parameters.fragmentShader.substring(insertionPoint);

			// console.log('Type: ', parameters.shaderType, '\n', 'Vertex shader: ', parameters.vertexShader);
		};
		const onBeforeCompileAuxiliaryMaterial = (parameters: THREE.WebGLProgramParametersWithUniforms) => {
			parameters.uniforms['lodThreshold'] = material.userData.lodThreshold;
			parameters.uniforms['actualCameraPosition'] = { value: this.renderingManager.camera.position };

			parameters.vertexShader = this.addPositionOffsetAndLoDToShader(parameters.vertexShader, true, instancingMethod);

			const insertionPoint = parameters.fragmentShader.indexOf('}');
			parameters.fragmentShader =
				'varying float idPass;\n'
				+ 'layout(location = 1) out vec4 id;\n'
				+ parameters.fragmentShader.substring(0, insertionPoint)
				+ 'id = vec4(vec3(idPass), 1.);\n'
				+ parameters.fragmentShader.substring(insertionPoint);

			// console.log('Type: ', parameters.shaderType, '\n', 'Vertex shader: ', parameters.vertexShader);
		};

		material.onBeforeCompile = onBeforeCompileMaterial;
		depthMaterial.onBeforeCompile = onBeforeCompileAuxiliaryMaterial;
		distanceMaterial.onBeforeCompile = onBeforeCompileAuxiliaryMaterial;

		this.materials!.push(material);
		this.materials!.push(depthMaterial);
		this.materials!.push(distanceMaterial);

		instancedMesh.customDistanceMaterial = distanceMaterial;
		instancedMesh.customDepthMaterial = depthMaterial;

		meshes.push(instancedMesh);
		positions.push(positionAttribute);
	}

	/**
	 * Adds code enabling the position offset and LoD passed via attribute in the given GLSL shader.
	 * @param shader The shader to augment
	 * @param isAuxiliaryMaterial Whether the shader is a depth or distance material
	 * @param instancingMethod What instancing method to use
	 * @protected
	 */
	protected addPositionOffsetAndLoDToShader(shader: string, isAuxiliaryMaterial: boolean, instancingMethod: InstancingMethod): string {
		return (
			`attribute float idAttribute;
			attribute vec2 positionOffset;
			attribute float lod;
			attribute float maxLod;
			uniform float lodThreshold;\n`
			/*
			Only depth and distance materials need this uniform of the actual camera position, as the shadow's lod
			will otherwise be calculated using the distance to the light
		 	*/
			+ (isAuxiliaryMaterial ? 'uniform vec3 actualCameraPosition;\n' : '')
			+ 'varying float idPass;\n'
			+ shader.substring(0, shader.indexOf('}'))
			+ ((instancingMethod === InstancingMethod.InstancedBufferGeometry) ? 'gl_Position += projectionMatrix * viewMatrix * vec4(positionOffset.x, 0, positionOffset.y, 0.);' : '')
			+ 'float distance = distance(vec3(positionOffset.x, 0., positionOffset.y), ' + (isAuxiliaryMaterial ? 'actualCameraPosition' : 'cameraPosition') + ');\n'
			+
			`gl_Position.w -= float((distance > lodThreshold * (lod + 1.) && lod < maxLod) || distance <= lodThreshold * lod) * gl_Position.w;
			idPass = idAttribute;\n`
			+ shader.substring(shader.indexOf('}')));
	}

	protected calculateIndicesForGlyphs(): void {
		if (!this.sceneCanBeDrawn()) return;

		this.glyphToCsvMapping = new Array(this._csv!.csv.length - 1);
		this.glyphCount = new Array<number>(this._glyphAtlas!.glyphs.length).fill(0);

		for (const [index, row] of this._csv!.csv.entries()) {
			if (index === 0) continue;
			const glyphIndices = this.calculateIndicesForGlyph(row);
			if (glyphIndices == null) continue;
			this.glyphToCsvMapping[index - 1] = { glyphIndices: glyphIndices, csvRow: index };
			for (const index of glyphIndices) ++this.glyphCount[index];
		}
	}

	protected calculateIndicesForGlyph(csvRow: Array<string>): Array<number> | null {
		const glyphTypeSelectionColumn = this._csv!.csv[0].indexOf(this._mappings!.requiredMappings.glyphType!);
		let glyphTypeSelectionValue = Number(csvRow[glyphTypeSelectionColumn]);

		if (glyphTypeSelectionValue === undefined) {
			console.error('The column selected for glyphType (' + this._mappings!.requiredMappings.glyphType! + ') contains at least one value that cannot be casted to a number: ' + csvRow[glyphTypeSelectionColumn]);
			return null;
		}
		if (glyphTypeSelectionValue !== Math.round(glyphTypeSelectionValue)) {
			console.warn('The value given as glyphType is not integer (' + glyphTypeSelectionValue + '). Because of this, the value has been rounded.');
			glyphTypeSelectionValue = Math.round(glyphTypeSelectionValue);
		}
		// If more distinct values of the csv column mapped to glyphType exist (or the values are too large), we wrap around (while preventing NaN)
		if (this._glyphAtlas?.json.types.length === 1) {
			glyphTypeSelectionValue = 0;
		}
		else if (glyphTypeSelectionValue >= this._glyphAtlas!.json.types.length) {
			console.warn('The value used to select the glyph type (' + glyphTypeSelectionValue + ') is larger than the amount of available types. This value will be wrapped around.');
			glyphTypeSelectionValue %= this._glyphAtlas!.json.types.length - 1;
		}

		let selectedGlyphName = new Array<string>();

		if (csvRow[0].includes('___Landmark')) {
			selectedGlyphName.push(this._glyphAtlas!.json.landmark);
		}
		else {
			let largestValidVariantIndex = -1;

			const glyphType = this._glyphAtlas!.json.types[glyphTypeSelectionValue];
			for (const [index, variant] of glyphType.variants.entries()) {
				let variantIsValid = true;

				for (const [key, value] of Object.entries(variant)) {
					if (key === 'name') continue;
					if (this._mappings!.optionalMappings[key] === undefined) continue;

					if (Number(csvRow[this._csv!.csv[0].indexOf(this._mappings!.optionalMappings[key])]) < (value as number)) {
						variantIsValid = false;
						break;
					}
				}

				if (variantIsValid) largestValidVariantIndex = index;
			}

			if (largestValidVariantIndex === -1) {
				console.warn('No valid variant could be found for the current row ' + csvRow + '. The base model of the selected type will be used.');
				selectedGlyphName.push(glyphType.baseModel);
			} else {
				selectedGlyphName = glyphType.variants[largestValidVariantIndex].name;
			}
		}

		const indices = new Array<number>();
		for (const name of selectedGlyphName) {
			indices.push(this._glyphAtlas!.glyphs.findIndex((value: THREE.Object3D) => { return name === value.name; } ));
		}
		return indices;
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

	public calculatePosition(csvRow: Array<string>): THREE.Vector2 {
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
            && this._glyphAtlas !== undefined
		);
	}

	public get glyphAtlas() {
		return this._glyphAtlas;
	}

	public set mappings(value: Mappings) {
		this._mappings = value;

		if (this._csv !== undefined) this.findAttributeBounds();

		this.calculateIndicesForGlyphs();
		this.createInstancedMeshes();
	}

	public async update(value: MappingsUpdate): Promise<void> {
		if (value.lodThreshold && this.materials !== undefined) {
			for (const material of this.materials) {
				material.userData.lodThreshold.value = this._mappings!.lodThreshold;
			}
			this.renderingManager.requestUpdate();
		}
		if (value.instancingMethod) {
			this.createInstancedMeshes();
		}
		if (value.labelSettings?.labelSize) {
			this.pickingHandler.labelSize = this._mappings!.labelSettings.labelSize;
		}
		if (value.labelSettings?.labelOffset) {
			this.pickingHandler.labelOffset = this._mappings!.labelSettings.labelOffset;
		}
		if (value.basicMappings?.size && this.instancedGlyphs !== undefined) {
			const scale = this._mappings!.basicMappings.size / this._glyphAtlas!.largestExtent;

			for (const entry of this.instancedGlyphs) {
				if (entry === undefined) continue;

				for (const mesh of entry.meshes) {
					mesh.scale.set(scale, scale, scale);
				}
			}
			this.renderingManager.requestUpdate();
		}
		if (value.basicMappings?.glyphAtlas) {
			if (this._mappings?.basicMappings.glyphAtlas !== undefined) {
				const possibleGlyphAtlas = await this.glyphLoader.getGlyphAtlas(this._mappings?.basicMappings.glyphAtlas + '.json');
				if (possibleGlyphAtlas !== null) this._glyphAtlas = possibleGlyphAtlas;
			}
			this.calculateIndicesForGlyphs();
			this.createInstancedMeshes();
		}
		if (value.shadowMapSettings?.sizeExponent) {
			const shadowMapResolution = 2 ** this._mappings!.shadowMapSettings.sizeExponent;
			this.spotLight.shadow.mapSize.set(shadowMapResolution, shadowMapResolution);
			this.spotLight.shadow.map?.setSize(shadowMapResolution, shadowMapResolution);
			this.renderingManager.requestUpdate();
		}
		if (value.shadowMapSettings?.enabled) {
			this.spotLight.castShadow = this._mappings!.shadowMapSettings.enabled;
			this.renderingManager.requestUpdate();
		}
		if (value.requiredMappings?.positionX || value.requiredMappings?.positionY) {
			this.xAndYBounds = undefined;
			this.createInstancedMeshes();
			this.pickingHandler.updateLabelPosition();
		}
		if (value.requiredMappings?.glyphType) {
			this.calculateIndicesForGlyphs();
			this.createInstancedMeshes();
		}
		if (value.optionalMappings) {
			this.calculateIndicesForGlyphs();
			this.createInstancedMeshes();
		}
	}

	protected disposeObject3D(object: THREE.Object3D) {
		object.traverse((currentObject: THREE.Object3D) => {
			if (Object.hasOwn(currentObject, 'geometry'))
				// @ts-expect-error TS2339; explicitly checks for existence of property
				currentObject.geometry.dispose();

			if (Object.hasOwn(currentObject, 'material'))
				// @ts-expect-error TS2339; explicitly checks for existence of property
				if (currentObject.material instanceof Array) {
					// @ts-expect-error TS2339; explicitly checks for existence of property
					for (const material of currentObject.material) {
						material.dispose();
					}
				} else {
					// @ts-expect-error TS2339; explicitly checks for existence of property
					currentObject.material.dispose();
				}

			// @ts-expect-error TS2339; explicitly checks for existence of property
			if (Object.hasOwn(currentObject, 'dispose')) currentObject.dispose();

			if (Object.hasOwn(currentObject, 'shadow'))
				// @ts-expect-error TS2339; explicitly checks for existence of property
				currentObject.shadow.dispose();
		});
	}
}