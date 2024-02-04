import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/addons/loaders/GLTFLoader.js';
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

		const loader = new GLTFLoader();
		const gltf = await loader.loadAsync(json.modelFile);

		const glyphs = new Array<THREE.Mesh | THREE.SkinnedMesh | THREE.Group | THREE.Object3D>();

		gltf.scene.traverse((object: THREE.Object3D) => {
			let nameExists = false;
			for (let i = 0; i < json.types.length; ++i) nameExists = nameExists || object.name.startsWith(json.types[i].name);

			if (nameExists) {
				nameExists = false;

				outerLoop:
				for (const type of json.types) {
					if (type.name === object.name) {
						nameExists = true;
						break;
					}
						
					for (const variant of type.variants) {
						if (variant.name === object.name) {
							nameExists = true;
							break outerLoop;
						}
					}
				}
			}

			if (nameExists) glyphs.push(object);
		});

		await this._sceneHandler.setOriginalMeshes(glyphs);
	}

	protected async loadGLTF(path: string): Promise<Array<THREE.Mesh | THREE.SkinnedMesh>> {
		const loader = new GLTFLoader();
		const gltf = (await loader.loadAsync(path) as GLTF);

		const meshes = new Array<THREE.Mesh | THREE.SkinnedMesh>();

		gltf.scene.traverse((object: THREE.Object3D) => { if (object.type === 'Mesh' || object.type === 'SkinnedMesh') meshes.push(object as THREE.Mesh || THREE.SkinnedMesh); });

		return meshes;
	}
}