import * as THREE from 'three';
//import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { WorldInHandControls } from "./worldInHandControls.ts";
import { GLTFLoader, GLTF } from 'three/addons/loaders/GLTFLoader.js';
import {FloatType} from "three";

export class ThreeHandler {
    protected updateRequested: boolean;
    protected div: HTMLElement;
    protected renderer: THREE.WebGLRenderer;
    protected camera: THREE.PerspectiveCamera;
    protected controls!: WorldInHandControls;
    protected scene!: THREE.Scene;
    protected meshGroup!: THREE.Group;
    protected originalMeshes: Array<THREE.Mesh>;
    protected instancedMeshes: Array<THREE.InstancedMesh>;
    protected instancePositionMatrices: Array<Array<THREE.Matrix4>>;
    protected instanceSizes: Array<Array<{basicScaleFactor: number, variationFactor: number}>>;

    protected renderTarget: THREE.WebGLRenderTarget;

    protected basicSize: number;
    protected maxVariation: number;

    constructor() {
        this.updateRequested = false;
        this.div = document.getElementById('threeJsDiv') as HTMLElement;

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(this.div.clientWidth, this.div.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.renderTarget = new THREE.WebGLRenderTarget(this.div.clientWidth * this.renderer.getPixelRatio(), this.div.clientHeight * this.renderer.getPixelRatio());
        this.renderTarget.depthTexture = new THREE.DepthTexture(this.renderTarget.width, this.renderTarget.height, FloatType);
        this.renderTarget.depthTexture.format = THREE.DepthFormat;

        this.div.appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(75, this.div.clientWidth / this.div.clientHeight, 0.01, 1000);
        this.camera.position.set(0, 0.5, 1.35);

        this.setupScene();

        this.originalMeshes = [];
        this.instancedMeshes = [];
        this.instanceSizes = [];
        this.instancePositionMatrices = [];
        this.basicSize = 0.1;
        this.maxVariation = 0.5;
    }

    protected setupScene() {
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
        const planeMaterial = new THREE.MeshPhongMaterial({color: 0xccccdd, side: THREE.DoubleSide})
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;
        plane.translateY(-0.0001);
        this.scene.add(plane);

        const grid = new THREE.GridHelper(2.25, 100);
        grid.receiveShadow = true;
        this.scene.add(grid);

        this.meshGroup = new THREE.Group();
        this.scene.add(this.meshGroup);

        this.controls = new WorldInHandControls(this.camera, this.renderer.domElement, this.renderTarget, this.renderer, this.scene);

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

    public async createScene(csv: Array<Array<string>>): Promise<void> {
        const xIndex = this.findIndex('x', csv);
        const yIndex = this.findIndex('y', csv);
        const locIndex = this.findIndex('LoC_normalized', csv);
        const commentIndex = this.findIndex('Comments_normalized', csv);

        let {min, max} = this.findExtrema(csv, xIndex, yIndex);

        await this.addMeshes(csv, xIndex, yIndex, locIndex, commentIndex, min, max);

        this.render();
    }

    protected async addMeshes(csv: Array<Array<string>>, xIndex: number, yIndex: number, locIndex: number, commentIndex: number, min: THREE.Vector2, max: THREE.Vector2): Promise<void> {
        // Only do this the first time, avoid reloading same data on switch of csv
        if (this.originalMeshes.length === 0) {
            this.originalMeshes = await this.loadGLTF('TreesA_Mod.glb');
        }

        // Clear old instance data
        this.instancedMeshes = new Array<THREE.InstancedMesh>(this.originalMeshes.length);
        this.instanceSizes = new Array<Array<{basicScaleFactor: number; variationFactor: number}>>(this.originalMeshes.length);
        this.instancePositionMatrices = new Array<Array<THREE.Matrix4>>(this.originalMeshes.length);
        this.meshGroup.clear();

        /*
         * Find how many instances of each Mesh are required and where they should be placed.
         */
        const instanceCounter = new Array<number>(this.originalMeshes.length);
        const positions = new Array<Array<THREE.Vector2>>(this.originalMeshes.length);
        for (let i = 0; i < csv.length - 1; ++i) {
            // First line of csv contains column names
            const csvIndex = i + 1;

            const meshIndex = this.calculateIndex(csv[csvIndex], locIndex);

            if (!instanceCounter[meshIndex]) instanceCounter[meshIndex] = 0;
            ++instanceCounter[meshIndex];

            if (!positions[meshIndex]) positions[meshIndex] = [];
            positions[meshIndex].push(this.normalizeCoordinatesToNDC(new THREE.Vector2(Number(csv[csvIndex][xIndex]), Number(csv[csvIndex][yIndex])), min, max));

            if (!this.instanceSizes[meshIndex]) this.instanceSizes[meshIndex] = [];
            this.instanceSizes[meshIndex].push({
                basicScaleFactor: 1,
                variationFactor: Number(csv[csvIndex][commentIndex])
            });
        }

        /*
         * Create an InstancedMesh from each Mesh loaded from the GLTF, as well as position and scale their instances.
         */
        for (let meshId = 0; meshId < this.originalMeshes.length; ++meshId) {
            const originalMesh = this.originalMeshes[meshId];
            const instancedMesh = new THREE.InstancedMesh(originalMesh.geometry, originalMesh.material, instanceCounter[meshId]);
            this.instancedMeshes[meshId] = instancedMesh;
            instancedMesh.receiveShadow = true;
            instancedMesh.castShadow = true;

            const largestExtent = new THREE.Box3().setFromObject(originalMesh, true).getBoundingSphere(new THREE.Sphere).radius * 2;
            const scaleFactor = (1 / largestExtent);

            for (let instanceId = 0; instanceId < instanceCounter[meshId]; ++instanceId) {
                // Order of transformation operations does not matter here
                const instanceMatrix = new THREE.Matrix4();
                instanceMatrix.setPosition(positions[meshId][instanceId].x, 0, positions[meshId][instanceId].y);

                if (!this.instancePositionMatrices[meshId]) this.instancePositionMatrices[meshId] = [];
                this.instancePositionMatrices[meshId][instanceId] = instanceMatrix;

                this.instanceSizes[meshId][instanceId].basicScaleFactor = scaleFactor;
                this.setInstanceMatrix(meshId, instanceId);
            }

            instancedMesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);
            instancedMesh.instanceMatrix.needsUpdate = true;
            this.meshGroup.add(instancedMesh);
        }
    }

    // Option setters

    public setMaxVariation(maxVariation: number) {
        this.maxVariation = maxVariation;
        this.updateInstanceMatrices();
    }

    public setBasicSize(basicSize: number) {
        this.basicSize = basicSize;
        this.updateInstanceMatrices();
    }

    // Helpers

    protected render() {
        this.renderer.setRenderTarget(this.renderTarget);
        this.renderer.render(this.scene, this.camera);
        this.renderer.setRenderTarget(null);
        this.renderer.render(this.scene, this.camera);

        this.controls.update();
    }

    protected calculateIndex(optionLine: string[], locIndex: number) {
        return Math.floor(Number(optionLine[locIndex]) * (this.instancedMeshes.length - 1));
    }

    protected updateInstanceMatrices() {
        for (let meshId = 0; meshId < this.instanceSizes.length; ++meshId) {
            if (!this.instanceSizes[meshId]) continue;

            for (let instanceId = 0; instanceId < this.instanceSizes[meshId].length; ++instanceId) {
                this.setInstanceMatrix(meshId, instanceId);
            }

            this.instancedMeshes[meshId].instanceMatrix.needsUpdate = true;
        }

        this.render();
    }

    protected setInstanceMatrix(meshId: number, instanceId: number) {
        const instanceMatrix = this.instancePositionMatrices[meshId][instanceId].clone();
        const scaleFactor = this.instanceSizes[meshId][instanceId].basicScaleFactor * this.basicSize * (1 + (this.instanceSizes[meshId][instanceId].variationFactor * 2 - 1) * this.maxVariation);
        instanceMatrix.scale(new THREE.Vector3(scaleFactor, scaleFactor, scaleFactor));
        this.instancedMeshes[meshId].setMatrixAt(instanceId, instanceMatrix);
    }

    protected findExtrema(csv: Array<Array<string>>, xIndex: number, yIndex: number) {
        let min = new THREE.Vector2(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
        let max = new THREE.Vector2(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);

        for (let i = 1; i < csv.length; ++i) {
            const x = Number(csv[i][xIndex]);
            const y = Number(csv[i][yIndex]);

            if (x < min.x) min.x = x;
            if (x > max.x) max.x = x;
            if (y < min.y) min.y = y;
            if (y > max.y) max.y = y;
        }
        return {min, max};
    }

    protected async loadGLTF(path: string): Promise<Array<THREE.Mesh | THREE.SkinnedMesh>> {
        const loader = new GLTFLoader();
        const gltf = (await loader.loadAsync(path) as GLTF);

        const meshes = new Array<THREE.Mesh | THREE.SkinnedMesh>();
        if (!gltf.parser.json.hasOwnProperty('meshes')) throw new Error("Cannot load provided GLTF: " + path);
        for (let i = 0; i < gltf.parser.json.meshes.length; ++i) {
            const loadedObject = await gltf.parser.loadMesh(i);
            if (loadedObject instanceof THREE.Mesh) meshes.push(loadedObject);
        }

        return meshes;
    }

    protected normalizeCoordinatesToNDC(coords: THREE.Vector2, min: THREE.Vector2, max: THREE.Vector2) {
        return coords.clone().sub(min).divide(max.clone().sub(min)).multiplyScalar(2).subScalar(1);
    }

    protected findIndex(attribute: string, csv: Array<Array<string>>) {
        return csv[0].findIndex((value: string, index: number) => { if (value === attribute) return index; });
    }
}