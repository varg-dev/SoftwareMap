import * as THREE from 'three';
//import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { WorldInHandControls } from '@world-in-hand-controls/threejs-world-in-hand';
import {SceneHandler} from './SceneHandler.ts';

export class ThreeHandler {
	protected updateRequested: boolean;
	protected div: HTMLElement;
	protected renderer: THREE.WebGLRenderer;
	readonly camera: THREE.PerspectiveCamera;

	readonly sceneHandler: SceneHandler;

	protected controls!: WorldInHandControls;

	constructor() {
		this.updateRequested = false;
		this.div = document.getElementById('threeJsDiv') as HTMLElement;

		this.renderer = new THREE.WebGLRenderer({antialias: false});
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFShadowMap;
		this.renderer.setSize(this.div.clientWidth, this.div.clientHeight);
		this.renderer.setPixelRatio(window.devicePixelRatio);

		this.div.appendChild(this.renderer.domElement);

		this.camera = new THREE.PerspectiveCamera(75, this.div.clientWidth / this.div.clientHeight, 0.01, 1000);
		this.camera.position.set(0, 0.5, 1.35);

		this.sceneHandler = new SceneHandler(this);

		this.controls = new WorldInHandControls(this.camera, this.renderer.domElement, this.renderer, this.sceneHandler.scene, false, 4);
		this.controls.allowRotationBelowGroundPlane = false;
		this.controls.useBottomOfBoundingBoxAsGroundPlane = false;

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

			//@ts-expect-error three.js type definitions seem to be broken, this works.
			this.sceneHandler.scene.dispatchEvent({type: 'resize'});

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

		this.renderer.setRenderTarget(this.controls.navigationRenderTarget);
		this.renderer.render(this.sceneHandler.scene, this.camera);

		this.controls.update();
	}

	public get canvas(): HTMLCanvasElement {
		return this.renderer.domElement;
	}
}