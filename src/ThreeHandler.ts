import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export class ThreeHandler {
    protected updateRequested: boolean;
    protected div: HTMLElement;
    protected renderer: THREE.WebGLRenderer;
    protected camera: THREE.Camera;
    protected controls: OrbitControls;
    protected scene: THREE.Scene;

    constructor() {
        this.updateRequested = false;
        this.div = document.getElementById('threeJsDiv') as HTMLElement;

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(this.div.clientWidth, this.div.clientHeight);
        this.div.appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(75, this.div.clientWidth / this.div.clientHeight, 0.1, 1000);
        this.camera.position.set(0, 2, 1);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xaaaaaa);
        const light = new THREE.PointLight(0xffffff, 5, 5);
        light.castShadow = true;
        light.shadow.mapSize = new THREE.Vector2(4096, 4096);
        light.position.set(-0.5, 1, 1);
        this.scene.add(light);
    }

    protected startRendering() {
        this.renderer.render(this.scene, this.camera);

        const requestUpdate = () => {
            this.updateRequested = true;
            requestAnimationFrame(requestUpdate);
        }
        requestAnimationFrame(requestUpdate);

        this.controls.addEventListener('change', () => {
            if (!this.updateRequested) return;
            this.renderer.render(this.scene, this.camera);
            this.updateRequested = false;
        });
    }

    public createScene(csv: Array<Array<string>>): void {
        const xIndex = this.findIndex('x', csv);
        const yIndex = this.findIndex('y', csv);
        const locIndex = this.findIndex('LoC_normalized', csv);
        const commentIndex = this.findIndex('Comments_normalized', csv);

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

        for (let i = 1; i < csv.length; ++i) {
            const position = new THREE.Vector2(Number(csv[i][xIndex]), Number(csv[i][yIndex]));
            position.copy(this.normalizeCoordinatesToNDC(position, min, max));

            const loc = Number(csv[i][locIndex]);

            const size = 0.005;
            const cubeGeometry = new THREE.BoxGeometry(size, loc, size);

            const comments = Number(csv[i][commentIndex]);
            const cubeMaterial = new THREE.MeshPhysicalMaterial({
                roughness: 0.1,
                reflectivity: 0.5,
                color: new THREE.Color(`hsl(${comments * 360}, 100%, 50%)`)
            })

            const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cubeMesh.castShadow = true;
            cubeMesh.receiveShadow = true;
            cubeMesh.position.set(position.x, loc / 2, position.y);

            this.scene.add(cubeMesh);
        }

        const planeGeometry = new THREE.PlaneGeometry(2.25, 2.25);
        planeGeometry.rotateX(Math.PI / 2);
        const planeMaterial = new THREE.MeshPhysicalMaterial({
            roughness: 0.8,
            reflectivity: 0.05,
            color: new THREE.Color(0xbbbbbb),
            side: THREE.DoubleSide
        })
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;
        plane.translateY(-0.0001);
        this.scene.add(plane);

        const grid = new THREE.GridHelper(2.25, 100);
        grid.receiveShadow = true;
        this.scene.add(grid);

        console.log(this.scene);

        this.startRendering();
    }

    protected normalizeCoordinatesToNDC(coords: THREE.Vector2, min: THREE.Vector2, max: THREE.Vector2) {
        return coords.clone().sub(min).divide(max.clone().sub(min)).multiplyScalar(2).subScalar(1);
    }

    protected findIndex(attribute: string, csv: Array<Array<string>>) {
        return csv[0].findIndex((value: string, index: number) => { if (value === attribute) return index; });
    }
}