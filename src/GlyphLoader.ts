import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {SceneHandler} from './SceneHandler.ts';

type GlyphType = {
	baseModel: string,
	name: string,
	variants: Array<{name: string} | Record<string, number | string>>
}

type GlyphJson = {
	attributes: Array<string>,
	modelFile: string,
	types: Array<GlyphType>
};

export class GlyphLoader {
	protected _sceneHandler: SceneHandler;

	constructor(sceneHandler: SceneHandler) {
		this._sceneHandler = sceneHandler;
	}

	public async setGlyphAtlas(path: string): Promise<void> {
		const json = (await (await fetch(path)).json()) as GlyphJson;

		const gltfRecord = import.meta.glob('/public/*.glb');
		const gltfNames = new Array<string>;
		for (const name in gltfRecord) {
			gltfNames.push(name.substring(name.lastIndexOf('/') + 1));
		}
		if (!gltfNames.includes(json.modelFile)) {
			console.error('The gltf specified in the chosen json does not exist!');
			return;
		}

		this.checkAndReplaceInvalidCharacters(json);

		await this._sceneHandler.setOriginalMeshes(await this.loadGLTF(json));
	}

	protected async loadGLTF(json: GlyphJson): Promise<Array<THREE.Mesh | THREE.SkinnedMesh | THREE.Group | THREE.Object3D>> {
		const loader = new GLTFLoader();
		const gltf = await loader.loadAsync(json.modelFile);

		const glyphs = new Array<THREE.Mesh | THREE.SkinnedMesh | THREE.Group | THREE.Object3D>();

		gltf.scene.traverse((object: THREE.Object3D) => {
			let nameExists = false;
			for (let i = 0; i < json.types.length; ++i) {
				nameExists = nameExists || object.name.startsWith(json.types[i].name);
				if (nameExists) break;
			}

			if (nameExists) {
				nameExists = false;

				outerLoop:
				for (const type of json.types) {
					if (type.name === object.name) {
						nameExists = true;
						break;
					}

					if (type.variants) {
						for (const variant of type.variants) {
							if (variant.name === object.name) {
								nameExists = true;
								break outerLoop;
							}
						}
					}
				}
			}

			if (nameExists) glyphs.push(object);
		});

		return glyphs;
	}
	
	protected checkAndReplaceInvalidCharacters(json: GlyphJson): void {
		function includesInvalid(name: string): boolean {
			// eslint-disable-next-line no-useless-escape
			return (/[\[\].:\\\s]/g).test(name);
		}

		let includesInvalidChars = false;

		for (let i = 0; i < json.types.length; ++i) {
			if (includesInvalid(json.types[i].name)) {
				includesInvalidChars = true;
				// Equivalent to https://github.com/mrdoob/three.js/blob/c2b4d2fa5fb1464cf4caa81bc831b35572ce7b9d/src/animation/PropertyBinding.js#L142
				// eslint-disable-next-line no-useless-escape
				json.types[i].name = json.types[i].name.replace(/\s/g, '_').replace(/[\[\].:\\]/g, '');
			}

			for (let j = 0; j < json.types[i].variants.length; ++j) {
				if (includesInvalid(json.types[i].variants[j].name as string)) {
					includesInvalidChars = true;
					// eslint-disable-next-line no-useless-escape
					json.types[i].variants[j].name = (json.types[i].variants[j].name as string).replace(/\s/g, '_').replace(/[\[\].:\\]/g, '');
				}
			}
		}

		if (includesInvalidChars) {
			console.warn('The specified json contains glyph names containing \'.\', \':\', \'[\', \']\', \'\\\' or whitespace. This is not supported by three.js.');
		}
	}
}