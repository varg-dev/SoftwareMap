import * as THREE from 'three';
//import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {WorldInHandControls} from '@world-in-hand-controls/threejs-world-in-hand';
import {InstancingMethod, SceneManager} from './SceneManager.ts';

export class RenderingManager {
	protected updateRequested: boolean;
	protected div: HTMLElement;
	protected renderer: THREE.WebGLRenderer;
	readonly camera: THREE.PerspectiveCamera;

	protected multisampledRenderTarget: THREE.WebGLRenderTarget;
	protected simpleRenderTarget: THREE.WebGLRenderTarget;
	protected copyScene: THREE.Scene;
	protected copyMaterial: THREE.ShaderMaterial;

	readonly sceneManager: SceneManager;

	readonly controls!: WorldInHandControls;

	constructor() {
		this.updateRequested = false;
		this.div = document.getElementById('threeJsDiv') as HTMLElement;

		this.renderer = new THREE.WebGLRenderer({antialias: false});
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		this.renderer.setSize(this.div.clientWidth, this.div.clientHeight);
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.getContext().getExtension('EXT_float_blend');

		this.div.appendChild(this.renderer.domElement);

		this.camera = new THREE.PerspectiveCamera(75, this.div.clientWidth / this.div.clientHeight, 0.01, 20);
		this.camera.position.set(0, 0.5, 1.35);

		this.sceneManager = new SceneManager(this);

		this.controls = new WorldInHandControls(this.camera, this.renderer.domElement, this.renderer, this.sceneManager.scene, false, 4);
		this.controls.allowRotationBelowGroundPlane = false;
		this.controls.useBottomOfBoundingBoxAsGroundPlane = false;

		const size = this.renderer.getSize(new THREE.Vector2()).multiplyScalar(this.renderer.getPixelRatio());
		this.multisampledRenderTarget = new THREE.WebGLRenderTarget(size.x, size.y, { count: 2, format: THREE.RGBAFormat, type: THREE.FloatType, samples: 4 });
		// The controls need a correct depth texture. By sharing the texture created by the WorldInHandControls, rendering to this.renderTarget also renders to this depth texture.
		this.multisampledRenderTarget.depthTexture = this.controls.navigationRenderTarget.depthTexture;
		this.simpleRenderTarget = new THREE.WebGLRenderTarget(size.x, size.y, { format: THREE.RGBAFormat, type: THREE.FloatType });
		this.simpleRenderTarget.texture.dispose();
		this.simpleRenderTarget.texture = this.multisampledRenderTarget.textures[1];
		// This probably sets up the framebuffer internally. Either way, this is necessary to later read from this render target.
		this.renderer.setRenderTarget(this.simpleRenderTarget);

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
			this.multisampledRenderTarget.setSize(size.x, size.y);
			this.simpleRenderTarget.setSize(size.x, size.y);
			this.renderer.setRenderTarget(this.simpleRenderTarget);

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

		if (this.sceneManager.mappings?.instancingMethod === InstancingMethod.None) {
			const glyphs = this.sceneManager.instancedGlyphs;
			if (glyphs === undefined) return;

			const lodThreshold = this.sceneManager.mappings.lodThreshold;

			for (const glyph of glyphs) {
				if (glyph === undefined) continue;
				for (const mesh of glyph) {
					const distance = this.camera.position.clone().sub(mesh.position).length();
					const lod: number = mesh.userData['lod'];
					const maxLod: number = mesh.userData['maxLod'];

					mesh.visible = !((distance > lodThreshold * (lod + 1) && lod < maxLod) || distance <= lodThreshold * lod);
				}
			}
		} else {
			const quadTree = this.sceneManager.glyphQuadTree;
			if (quadTree !== undefined && this.sceneManager.mappings !== undefined) {
				quadTree.updateVisibility(this.camera.position, this.sceneManager.mappings.lodThreshold);
			}
		}

		if (this.sceneManager.mappings?.instancingMethod === InstancingMethod.None || this.sceneManager.mappings?.instancingMethod === InstancingMethod.InstancedMesh) {
			this.renderer.setRenderTarget(this.controls.navigationRenderTarget);
			this.renderer.render(this.sceneManager.scene, this.camera);
			this.controls.update(true);
		} else {
			this.renderer.setRenderTarget(this.multisampledRenderTarget);
			this.renderer.render(this.sceneManager.scene, this.camera);

			this.copyRenderTargetToCanvas(this.multisampledRenderTarget);

			this.controls.update(false);
		}
	}

	public resetCamera(): void {
		this.controls.reset();
	}

	/**
	 * Read the id at the position specified in NDC. x and y are clamped to [-1, 1].
	 * @param x
	 * @param y
	 */
	public getIdFromPixel(x: number, y: number): number | null {
		const width = this.simpleRenderTarget.width;
		const height = this.simpleRenderTarget.height;

		x = Math.max(Math.min(1, x), -1);
		y = Math.max(Math.min(1, y), -1);

		const xPixel = (x * width / 2 + width / 2) - 1;
		const yPixel = (y * height / 2 + height / 2) - 1;

		const pixels = new Float32Array(4 * 9);
		this.renderer.readRenderTargetPixels(this.simpleRenderTarget, xPixel, yPixel, 3, 3, pixels);

		let isEqual = true;

		/*
		Due to MSAA, the value returned is possibly interpolated between multiple glyphs or between a glyph and the background.
		The code below is an attempt to ensure a correct value is read as there is no easy way to tell if the value 125 is correct
		or the result of interpolation between the background (0) and glyph number 250.

		Additionally, different GPU drivers seem to produce different results when reading from this multisampled RenderTarget.
		On Nvidia, this may read 195.00001525878906, 194.99998474121094 and 195 for the same ID value without interpolation with
		the background. As such, we check if the deviation between adjacent pixels is small enough to be considered equal.
		Larger thresholds can be risky, as glyphs with ids 194 and 195 could technically be placed next to each other so that
		interpolation between their ids will occur.
		 */
		for (let i = 4; i < pixels.length; i += 4) if (Math.abs(pixels[i] - pixels[0]) > 0.001) {
			isEqual = false;
			break;
		}

		if (isEqual && pixels[0] !== 0) return Math.round(pixels[0]);
		else return null;
	}

	public get canvas(): HTMLCanvasElement {
		return this.renderer.domElement;
	}

	protected copyRenderTargetToCanvas(renderTarget: THREE.WebGLRenderTarget): void {
		this.copyMaterial.uniforms = { uColorTexture: { value: renderTarget.textures[0] } };
		this.renderer.setRenderTarget(null);
		this.renderer.render(this.copyScene, this.camera);
	}

	public benchmark(): void {
		console.log('\n----------\nStarting benchmark...\n----------\n\n');

		if (this.sceneManager.mappings === undefined) return;

		const numFrames = this.sceneManager.mappings.numberBenchmarkingFrames;
		const warmupFactor = 0.5;
		let remainingFrames = Math.round(numFrames * (1 + warmupFactor));
		let begin: number;
		let oldBegin: number;
		let end: number;
		const rotationMatrix = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0), 2 * Math.PI / Math.round(numFrames * (1 + warmupFactor)));
		const origin = new THREE.Vector3(0, 0, 0);

		this.resetCamera();

		const deltaTimes = new Array<number>();
		const callback = () => {
			if (remainingFrames <= numFrames) {
				oldBegin = begin;
				begin = performance.now();
			}

			this.render();

			if (remainingFrames < numFrames) {
				end = performance.now();
				deltaTimes.push(end - oldBegin);
			}

			--remainingFrames;
			if (remainingFrames < 0) getResult();

			this.camera.position.applyMatrix4(rotationMatrix);
			this.camera.lookAt(origin);

			if (remainingFrames >= 0) requestAnimationFrame(callback);
		};

		const getResult = () => {
			const sumTime = deltaTimes.reduce((previousValue: number, currentValue: number) => { return previousValue + currentValue; }, 0);
			console.log('Elapsed time: ' + sumTime + 'ms', 'Average fps: ' + numFrames / (sumTime / 1000));

			deltaTimes.sort((a, b) => a - b);
			const avgFT = sumTime / deltaTimes.length;
			const maxFT = deltaTimes[deltaTimes.length - 1];
			const zeroPointOneHFT = deltaTimes[Math.round((deltaTimes.length - 1) * 0.999)];
			const oneHFT = deltaTimes[Math.round((deltaTimes.length - 1) * 0.99)];
			const medFT = deltaTimes[Math.round((deltaTimes.length - 1) / 2)];
			const oneLFT = deltaTimes[Math.round((deltaTimes.length - 1) * 0.01)];
			const zeroPointOneLFT = deltaTimes[Math.round((deltaTimes.length - 1) * 0.001)];
			const minFT = deltaTimes[0];

			console.log( 'Min fps: ' + 1 / (maxFT / 1000) + ', 0.1% low: ' + 1 / (zeroPointOneHFT / 1000) + ', 1% low: ' + 1 / (oneHFT / 1000)
				+ ', median: ' + 1 / (medFT / 1000)
				+ ', 1% high: ' + 1 / (oneLFT / 1000) + ', 0.1% high: ' + 1 / (zeroPointOneLFT / 1000) + ', max: ' + 1 / (minFT / 1000) );
			this.resetCamera();

			let stringRepresentation = JSON.stringify(deltaTimes);
			stringRepresentation = '"' + stringRepresentation.substring(1, stringRepresentation.length - 1) + '"';
			stringRepresentation = 'InstancingMethod,QuadtreeDepth,GlyphAtlas,AvgFT,MinFT,0.1LFT,1LFT,MedFT,1HFT,0.1HFT,MaxFT,Frametimes\n'
				+ InstancingMethod[this.sceneManager.mappings!.instancingMethod] + ',' + this.sceneManager.mappings!.quadtreeDepth + ',' + this.sceneManager.mappings!.basicMappings.glyphAtlas + ','
				+ avgFT + ',' + minFT + ',' + zeroPointOneLFT + ',' + oneLFT + ',' + medFT + ',' + oneHFT + ',' + zeroPointOneHFT + ',' + maxFT + ','
				+ stringRepresentation;

			const file = new File([stringRepresentation], 'benchmark_' + new Date().toISOString().replace(':', '_').replace('.', '_') + '.csv', { type: 'text/csv' });
			const link = document.createElement('a');
			const url = URL.createObjectURL(file);

			link.href = url;
			link.download = file.name;
			document.body.appendChild(link);
			link.click();

			document.body.removeChild(link);
			window.URL.revokeObjectURL(url);

			console.log('\n----------\nEnd of benchmark.\n----------\n\n');
		};

		requestAnimationFrame(callback);
	}
}