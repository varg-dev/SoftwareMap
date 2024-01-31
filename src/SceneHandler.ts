import * as THREE from "three";
import { GLTFLoader, GLTF } from 'three/addons/loaders/GLTFLoader.js';
import {ThreeHandler} from "./ThreeHandler.ts";
import {Vector2} from "three";

export class SceneHandler {
    protected threeHandler: ThreeHandler;

    readonly scene: THREE.Scene;
    protected meshGroup: THREE.Group;
    protected originalMeshes: Array<THREE.Mesh>;
    protected instancedMeshes: Array<THREE.InstancedMesh>;
    protected instancePositionMatrices: Array<Array<THREE.Matrix4>>;
    protected instanceSizes: Array<Array<{basicScaleFactor: number, variationFactor: number}>>;

    protected variableMapping: Record<string, {name: string, index: number}>;

    protected basicSize: number;
    protected maxVariation: number;

    protected csv: Array<Array<string>>;

    constructor(threeHandler: ThreeHandler) {
        this.threeHandler = threeHandler;

        this.originalMeshes = [];
        this.instancedMeshes = [];
        this.instanceSizes = [];
        this.instancePositionMatrices = [];
        this.basicSize = 0.1;
        this.maxVariation = 0.5;

        this.variableMapping = {
            positionX: { name: 'x', index: -1 },
            positionY: { name: 'y', index: -1 },
            size: {name: 'Comments_normalized', index: -1},
            mesh: {name: 'LoC_normalized', index: -1}
        };

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
    }

    public async createScene(csv?: Array<Array<string>>): Promise<void> {
        if (csv) this.csv = csv;

        let invalidMappings = '';

        for (let variableMappingKey in this.variableMapping) {
            this.findIndex(variableMappingKey);
            if (this.variableMapping[variableMappingKey].index === -1) invalidMappings += ('\t' + variableMappingKey + '\n');
        }

        if (invalidMappings.length !== 0) {
            let messageString = 'The following columns don\'t exist in the currently loaded csv:\n' + invalidMappings + '\nThese columns exist:\n';

            for (let i = 0; i < this.csv[0].length; ++i) messageString += ('\t' + this.csv[0][i] + '\n');

            alert(messageString);
            return;
        }

        let {min, max} = this.findExtremaInCsv();

        await this.addMeshes(min, max);

        this.threeHandler.render();
    }

    protected async addMeshes(min: Vector2, max: Vector2): Promise<void> {
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
        for (let i = 0; i < this.csv.length - 1; ++i) {
            // First line of csv contains column names
            const csvIndex = i + 1;

            const meshIndex = this.calculateIndex(this.csv[csvIndex], this.variableMapping['mesh'].index);

            if (!instanceCounter[meshIndex]) instanceCounter[meshIndex] = 0;
            ++instanceCounter[meshIndex];

            if (!positions[meshIndex]) positions[meshIndex] = [];
            positions[meshIndex].push(this.normalizeCoordinatesToNDC(new THREE.Vector2(Number(this.csv[csvIndex][this.variableMapping['positionX'].index]), Number(this.csv[csvIndex][this.variableMapping['positionY'].index])), min, max));

            if (!this.instanceSizes[meshIndex]) this.instanceSizes[meshIndex] = [];
            this.instanceSizes[meshIndex].push({
                basicScaleFactor: 1,
                variationFactor: Number(this.csv[csvIndex][this.variableMapping['size'].index])
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

    public async setMapping(option: string, columnName: string) {
        this.variableMapping[option].name = columnName;
        this.findIndex(option);
        await this.createScene();
    }

    // Helpers

    protected calculateIndex(optionLine: string[], meshChoiceIndex: number) {
        return Math.floor(Number(optionLine[meshChoiceIndex]) * (this.instancedMeshes.length - 1));
    }

    protected updateInstanceMatrices() {
        for (let meshId = 0; meshId < this.instanceSizes.length; ++meshId) {
            if (!this.instanceSizes[meshId]) continue;

            for (let instanceId = 0; instanceId < this.instanceSizes[meshId].length; ++instanceId) {
                this.setInstanceMatrix(meshId, instanceId);
            }

            this.instancedMeshes[meshId].instanceMatrix.needsUpdate = true;
        }

        this.threeHandler.render();
    }

    protected setInstanceMatrix(meshId: number, instanceId: number) {
        const instanceMatrix = this.instancePositionMatrices[meshId][instanceId].clone();
        const scaleFactor = this.instanceSizes[meshId][instanceId].basicScaleFactor * this.basicSize * (1 + (this.instanceSizes[meshId][instanceId].variationFactor * 2 - 1) * this.maxVariation);
        instanceMatrix.scale(new THREE.Vector3(scaleFactor, scaleFactor, scaleFactor));
        this.instancedMeshes[meshId].setMatrixAt(instanceId, instanceMatrix);
    }

    protected findExtremaInCsv() {
        let min = new THREE.Vector2(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
        let max = new THREE.Vector2(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);

        for (let i = 1; i < this.csv.length; ++i) {
            const x = Number(this.csv[i][this.variableMapping['positionX'].index]);
            const y = Number(this.csv[i][this.variableMapping['positionY'].index]);

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

    protected findIndex(attribute: string) {
        this.variableMapping[attribute].index = this.csv[0].findIndex((value: string, index: number) => { if (value === this.variableMapping[attribute].name) return index; });
    }
}