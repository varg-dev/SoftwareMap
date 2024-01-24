import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader, GLTF } from 'three/addons/loaders/GLTFLoader.js';

export class ThreeHandler {
    protected updateRequested: boolean;
    protected div: HTMLElement;
    protected renderer: THREE.WebGLRenderer;
    protected camera: THREE.PerspectiveCamera;
    protected controls: OrbitControls;
    protected scene: THREE.Scene;
    protected meshGroup: THREE.Group;
    protected instancedMeshes: Array<THREE.InstancedMesh>;

    constructor() {
        this.updateRequested = false;
        this.div = document.getElementById('threeJsDiv') as HTMLElement;

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(this.div.clientWidth, this.div.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.div.appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(75, this.div.clientWidth / this.div.clientHeight, 0.1, 1000);
        this.camera.position.set(0, 0.5, 1.35);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.setupScene();

        this.instancedMeshes = [];
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
        this.meshGroup.clear();

        const meshes = await this.loadGLTF('TreesA_Mod.glb');

        this.instancedMeshes = new Array<THREE.InstancedMesh>(meshes.length);

        /*
         * Find how many instances of each Mesh are required and where they should be placed.
         */
        const instanceCounter = new Array<number>(meshes.length);
        const positions = new Array<Array<THREE.Vector2>>(meshes.length);
        const sizes = new Array<Array<number>>(meshes.length);
        for (let i = 0; i < csv.length - 1; ++i) {
            // First line of csv contains column names
            const csvIndex = i + 1;

            const meshIndex = this.calculateIndex(csv[csvIndex], locIndex);

            if (!instanceCounter[meshIndex]) instanceCounter[meshIndex] = 0;
            ++instanceCounter[meshIndex];

            if (!positions[meshIndex]) positions[meshIndex] = [];
            positions[meshIndex].push(this.normalizeCoordinatesToNDC(new THREE.Vector2(Number(csv[csvIndex][xIndex]), Number(csv[csvIndex][yIndex])), min, max));

            if (!sizes[meshIndex]) sizes[meshIndex] = [];
            sizes[meshIndex].push(Number(csv[csvIndex][commentIndex]));
        }

        /*
         * Create an InstancedMesh from each Mesh loaded from the GLTF, as well as position and scale their instances.
         */
        for (let i = 0; i < meshes.length; ++i) {
            const originalMesh = meshes[i];
            const instancedMesh = new THREE.InstancedMesh(originalMesh.geometry, originalMesh.material, instanceCounter[i]);
            instancedMesh.receiveShadow = true;
            instancedMesh.castShadow = true;

            const largestExtent = new THREE.Box3().setFromObject(originalMesh, true).getBoundingSphere(new THREE.Sphere).radius * 2;
            const scaleFactor = (1 / largestExtent) * 0.1;
            const maxVariation = 0.5;

            for (let j = 0; j < instanceCounter[i]; ++j) {
                const actualScaleFactor = scaleFactor * (1 + (sizes[i][j] * 2 - 1) * maxVariation);

                const instanceMatrix = new THREE.Matrix4();
                instanceMatrix.scale(new THREE.Vector3(actualScaleFactor, actualScaleFactor, actualScaleFactor));
                instanceMatrix.setPosition(positions[i][j].x, 0, positions[i][j].y);
                instancedMesh.setMatrixAt(j, instanceMatrix);
            }

            instancedMesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);
            instancedMesh.instanceMatrix.needsUpdate = true;
            this.meshGroup.add(instancedMesh);

            this.instancedMeshes[i] = instancedMesh;
        }
    }

    // Helpers

    protected render() {
        this.renderer.render(this.scene, this.camera);
    }

    protected calculateIndex(optionLine: string[], locIndex: number) {
        return Math.floor(Number(optionLine[locIndex]) * (this.instancedMeshes.length - 1));
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
        for (let i = 0; i < gltf.parser.json.meshes.length; ++i) {
            meshes.push(await gltf.parser.loadMesh(i))
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