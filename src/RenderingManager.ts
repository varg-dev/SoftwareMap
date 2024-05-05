import * as THREE from 'three';
//import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { WorldInHandControls } from '@world-in-hand-controls/threejs-world-in-hand';
import {SceneManager} from './SceneManager.ts';

export class RenderingManager {
	protected updateRequested: boolean;
	protected div: HTMLElement;
	protected renderer: THREE.WebGLRenderer;
	readonly camera: THREE.PerspectiveCamera;

	protected renderTarget: THREE.WebGLRenderTarget;
	protected copyScene: THREE.Scene;
	protected copyMaterial: THREE.ShaderMaterial;

	readonly sceneManager: SceneManager;

	protected controls!: WorldInHandControls;

	constructor() {
		this.updateRequested = false;
		this.div = document.getElementById('threeJsDiv') as HTMLElement;

		this.renderer = new THREE.WebGLRenderer({antialias: false});
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		this.renderer.setSize(this.div.clientWidth, this.div.clientHeight);
		this.renderer.setPixelRatio(window.devicePixelRatio);

		this.div.appendChild(this.renderer.domElement);

		this.camera = new THREE.PerspectiveCamera(75, this.div.clientWidth / this.div.clientHeight, 0.01, 20);
		this.camera.position.set(0, 0.5, 1.35);

		this.sceneManager = new SceneManager(this);

		this.controls = new WorldInHandControls(this.camera, this.renderer.domElement, this.renderer, this.sceneManager.scene, false, 4);
		this.controls.allowRotationBelowGroundPlane = false;
		this.controls.useBottomOfBoundingBoxAsGroundPlane = false;

		const size = this.renderer.getSize(new THREE.Vector2()).multiplyScalar(this.renderer.getPixelRatio());
		this.renderTarget = new THREE.WebGLRenderTarget(size.x, size.y, { count: 2, format: THREE.RGBAFormat, type: THREE.FloatType, samples: 4 });
		// The controls need a correct depth texture. By sharing the texture created by the WorldInHandControls, rendering to this.renderTarget also renders to this depth texture.
		this.renderTarget.depthTexture = this.controls.navigationRenderTarget.depthTexture;

		const copyVertexShader = `
			varying vec2 vUV;
			
			void main() {
				vUV = uv;
				gl_Position = vec4(position, 1.0);
			}
			`;

		const copyFragmentShader = `
			varying vec2 vUV;
			uniform sampler2D uColorTexture;
			
			void main() {
				gl_FragColor = LinearTosRGB(texture(uColorTexture, vUV));
			}
			`;

		this.copyScene = new THREE.Scene();
		this.copyMaterial = new THREE.ShaderMaterial();
		this.copyMaterial.vertexShader = copyVertexShader;
		this.copyMaterial.fragmentShader = copyFragmentShader;
		const copyPlane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.copyMaterial);
		copyPlane.frustumCulled = false;

		this.copyScene.add(copyPlane);

		this.startRendering();
	}

	protected startRendering() {
		this.requestUpdate();

		this.controls.addEventListener('change', () => this.requestUpdate());

		window.addEventListener('resize', () => {
			this.renderer.setSize(this.div.clientWidth, this.div.clientHeight);
			this.camera.aspect = this.div.clientWidth / this.div.clientHeight;
			this.renderer.setPixelRatio(window.devicePixelRatio);
			this.camera.updateProjectionMatrix();

			const size = this.renderer.getSize(new THREE.Vector2()).multiplyScalar(this.renderer.getPixelRatio());
			this.renderTarget.setSize(size.x, size.y);

			//@ts-expect-error three.js type definitions seem to be broken, this works.
			this.sceneManager.scene.dispatchEvent({type: 'resize'});

			this.requestUpdate();
		});
	}

	// Helpers

	public requestUpdate() {
		if (this.updateRequested) return;

		this.updateRequested = true;

		// lambda to preserve 'this'
		requestAnimationFrame(() => this.render());
	}

	protected render() {
		this.updateRequested = false;

		this.renderer.setRenderTarget(this.renderTarget);
		this.renderer.render(this.sceneManager.scene, this.camera);

		this.copyRenderTargetToCanvas(this.renderTarget);

		this.controls.update(false);
	}

	public get canvas(): HTMLCanvasElement {
		return this.renderer.domElement;
	}

	protected copyRenderTargetToCanvas(renderTarget: THREE.WebGLRenderTarget): void {
		this.copyMaterial.uniforms = { uColorTexture: { value: renderTarget.textures[0] } };
		this.renderer.setRenderTarget(null);
		this.renderer.render(this.copyScene, this.camera);
	}
}