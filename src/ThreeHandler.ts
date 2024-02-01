import * as THREE from 'three';
//import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { WorldInHandControls } from "./worldInHandControls.ts";
import {FloatType} from "three";
import {SceneHandler} from "./SceneHandler.ts";

export class ThreeHandler {
    protected updateRequested: boolean;
    protected div: HTMLElement;
    protected renderer: THREE.WebGLRenderer;
    protected camera: THREE.PerspectiveCamera;

    readonly sceneHandler: SceneHandler

    protected controls!: WorldInHandControls;
    protected renderTarget: THREE.WebGLRenderTarget;

    constructor() {
        this.updateRequested = false;
        this.div = document.getElementById('threeJsDiv') as HTMLElement;

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFShadowMap;
        this.renderer.setSize(this.div.clientWidth, this.div.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.renderTarget = new THREE.WebGLRenderTarget(this.renderer.getSize(new THREE.Vector2).x, this.renderer.getSize(new THREE.Vector2).y);
        this.renderTarget.depthTexture = new THREE.DepthTexture(this.renderTarget.width, this.renderTarget.height, FloatType);
        this.renderTarget.depthTexture.format = THREE.DepthFormat;

        this.div.appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(75, this.div.clientWidth / this.div.clientHeight, 0.01, 1000);
        this.camera.position.set(0, 0.5, 1.35);

        this.sceneHandler = new SceneHandler(this);

        this.controls = new WorldInHandControls(this.camera, this.renderer.domElement, this.renderTarget, this.renderer, this.sceneHandler.scene);

        this.startRendering();
    }

    protected startRendering() {
        this.render();

        const requestUpdate = () => {
            this.updateRequested = true;
            requestAnimationFrame(requestUpdate);
        }
        requestAnimationFrame(requestUpdate);

        this.controls.addEventListener('change', () => {
            if (!this.updateRequested) return;
            this.render();
            this.updateRequested = false;
        });

        window.addEventListener('resize', () => {
            this.renderer.setSize(this.div.clientWidth, this.div.clientHeight);
            this.camera.aspect = this.div.clientWidth / this.div.clientHeight;
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.renderTarget.setSize(this.div.clientWidth * this.renderer.getPixelRatio(), this.div.clientHeight * this.renderer.getPixelRatio());
            this.camera.updateProjectionMatrix();

            this.render();
        })
    }

    // Helpers

    render() {
        this.renderer.setRenderTarget(this.renderTarget);
        this.renderer.render(this.sceneHandler.scene, this.camera);
        this.renderer.setRenderTarget(null);
        this.renderer.render(this.sceneHandler.scene, this.camera);

        this.controls.update();
    }


}