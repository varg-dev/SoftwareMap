import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

/**
 * The complete type of a glyph as specified by the glyph atlas JSON.
 */
export type Glyph = {
	baseModel: string,
	variants: Array<{name: Array<string>} & Record<string, number>>
};

/**
 * The loaded glyph atlas JSON.
 */
export type GlyphJson = {
	attributes: Array<string>,
	modelFile: string,
	landmark: string,
	types: Array<Glyph>
};

/**
 * The loaded glyph atlas JSON and the 3D models specified within. Also contains a scaling factor to normalize model size.
 */
export type GlyphAtlas = {
	json: GlyphJson,
	glyphs: Array<THREE.Mesh | THREE.SkinnedMesh | THREE.Group | THREE.Object3D>,
	largestExtent: number
};

/**
 * A class used to load a valid glyph atlas containing the corresponding JSON and the 3D models specified within from disk. Produces a {@link GlyphAtlas}.
 */
export class GlyphLoader {
	/**
	 * Loads the glyph atlas JSON specified by {@link path}.
	 *
	 * This only returns the 3D models specified in the given JSON.
	 * If the names of the models include [invalid characters]{@link https://discourse.threejs.org/t/issue-with-gltfloader-and-objects-with-dots-in-their-name-attribute/6726}, these are replaced.
	 * @param path A path to the JSON file to load
	 */
	public async getGlyphAtlas(path: string): Promise<GlyphAtlas | null> {
		const json = (await (await fetch(path)).json()) as GlyphJson;

		// Convert non-LoD glyph atlases into a compatible format, expect a warning here
		for (const type of json.types) {
			for (const variant of type.variants) {
				if (!(variant.name instanceof Array)) variant.name = [variant.name];
			}
		}

		const gltfRecord = import.meta.glob('/public/*.glb');
		const gltfNames = new Array<string>;
		for (const name in gltfRecord) {
			gltfNames.push(name.substring(name.lastIndexOf('/') + 1));
		}
		if (!gltfNames.includes(json.modelFile)) {
			console.error('The gltf specified in the chosen json does not exist!');
			return null;
		}

		this.checkAndReplaceInvalidCharacters(json);

		if (json.types.length === 1) {
			console.warn('The selected glyph atlas only provides one type of glyph. The mapping of glyphType has no effect.');
		}

		const gltf = await this.loadGLTF(json);

		return { json: json, glyphs: gltf.glyphs, largestExtent: gltf.largestExtent };
	}

	/**
	 * Loads the GLTF file specified in the given {@link GlyphJson}. Only returns the 3D models that are specified in {@link json}. Also calculates the size normalization factor for the glyphs.
	 * @param json The JSON of which to load the GLTF file
	 * @protected
	 */
	protected async loadGLTF(json: GlyphJson): Promise<{ glyphs: Array<THREE.Mesh | THREE.SkinnedMesh | THREE.Group | THREE.Object3D>, largestExtent: number }> {
		const loader = new GLTFLoader();
		const gltf = await loader.loadAsync(json.modelFile);

		const glyphs = new Array<THREE.Mesh | THREE.SkinnedMesh | THREE.Group | THREE.Object3D>();

		// Only return glyphs that are specified in the glyph atlas json
		gltf.scene.traverse((object: THREE.Object3D) => {
			let nameExists = false;

			if (object.name === json.landmark) nameExists = true;

			for (let i = 0; i < json.types.length && !nameExists; ++i) {
				for (let j = 0; j < json.types[i].variants.length && !nameExists; ++j) {
					for (let k = 0; k < json.types[i].variants[j].name.length && !nameExists; ++k) {
						nameExists = nameExists || object.name === json.types[i].variants[j].name[k];
					}
				}
			}

			if (nameExists) glyphs.push(object);
		});

		// Find the largest extent of the largest glyph to normalize against
		let largestExtent = Number.NEGATIVE_INFINITY;
		for (const glyph of glyphs) {
			largestExtent = Math.max(new THREE.Box3().setFromObject(glyph, true).getBoundingSphere(new THREE.Sphere).radius * 2, largestExtent);
		}

		return { glyphs, largestExtent };
	}

	/**
	 * Replaces all illegal names in the given {@link GlyphJson}.
	 * @see https://discourse.threejs.org/t/issue-with-gltfloader-and-objects-with-dots-in-their-name-attribute/6726
	 * @param json
	 * @protected
	 */
	protected checkAndReplaceInvalidCharacters(json: GlyphJson): void {
		function includesInvalid(name: string): boolean {
			// eslint-disable-next-line no-useless-escape
			return (/[\[\].:\\\s]/g).test(name);
		}

		let includesInvalidChars = false;

		if (includesInvalid(json.landmark)) {
			includesInvalidChars = true;
			json.landmark = THREE.PropertyBinding.sanitizeNodeName(json.landmark);
		}

		for (const type of json.types) {
			if (includesInvalid(type.baseModel)) {
				includesInvalidChars = true;
				type.baseModel = THREE.PropertyBinding.sanitizeNodeName(type.baseModel);
			}

			if (type.variants !== undefined) {
				for (const variant of type.variants) {
					for (let i = 0; i < variant.name.length; ++i) {
						if (includesInvalid(variant.name[i])) {
							includesInvalidChars = true;
							variant.name[i] = THREE.PropertyBinding.sanitizeNodeName(variant.name[i]);
						}
					}
				}
			}
		}

		if (includesInvalidChars) {
			console.warn('The specified json contains glyph names containing \'.\', \':\', \'[\', \']\', \'\\\' or whitespace. This is not supported by three.js. All whitespace is replaced with \'_\' and all other invalid characters are removed. If this leads to issues, consider using \'-\' instead of the invalid characters. For more info visit https://discourse.threejs.org/t/issue-with-gltfloader-and-objects-with-dots-in-their-name-attribute/6726.');
		}
	}
}