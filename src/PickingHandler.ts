import * as THREE from 'three';
import {SceneHandler} from './SceneHandler.ts';
import {FontFace, FontFaceLoader, Label} from 'three-openll-labels';
import Alignment = Label.Alignment;

export class PickingHandler {
	protected sceneHandler: SceneHandler;
	protected meshGroup: THREE.Group;
	protected canvas: HTMLCanvasElement;
	protected camera: THREE.PerspectiveCamera;
	protected raycaster: THREE.Raycaster;
	protected fontFace: FontFace;

	protected currentMesh: THREE.InstancedMesh | undefined;
	protected currentLabel: Label | undefined;

	protected _labelOffset: number = 0.01;

	constructor(meshGroup: THREE.Group, sceneHandler: SceneHandler) {
		this.meshGroup = meshGroup;

		this.sceneHandler = sceneHandler;

		this.camera = this.sceneHandler.threeHandler.camera;
		this.canvas = this.sceneHandler.threeHandler.canvas;

		this.raycaster = new THREE.Raycaster();

		this.fontFace = new FontFaceLoader().load(
			'roboto-regular-f00f2383',
			() => { this.canvas.addEventListener('pointerdown', (event: PointerEvent) => { this.handlePointerDown(event); }); },
			undefined,
			(error: unknown) => { console.error(error); }
		);
	}

	protected handlePointerDown(event: PointerEvent) {
		if (event.button !== 0) return;

		// only ever have one label
		this.currentLabel?.dispose();
		this.currentMesh?.clear();
		this.currentLabel = undefined;
		this.currentMesh = undefined;

		this.raycaster.setFromCamera(new THREE.Vector2((event.clientX / this.canvas.clientWidth) * 2 - 1, 1 - (event.clientY / this.canvas.clientHeight) * 2), this.camera);

		const picks = this.raycaster.intersectObject(this.meshGroup);
		if (picks.length === 0) return;
		const pickedMesh = picks[0].object as THREE.InstancedMesh;
		const label = new Label('Dummy Text', this.fontFace, new THREE.Color(0xffffff));

		const instanceMatrix = new THREE.Matrix4();
		pickedMesh.getMatrixAt(picks[0].instanceId as number, instanceMatrix);
		label.position.setFromMatrixPosition(instanceMatrix);
		const scale = 0.01;
		label.scale.set(scale, scale, scale);
		label.rotateX(3 * Math.PI / 2);
		label.alignment = Alignment.Center;
		label.addTo(pickedMesh);
		label.translateGlobal(new THREE.Vector3(0, 0, this._labelOffset));

		this.currentLabel = label;
		this.currentMesh = pickedMesh;

		// render twice to actually display label (label is never displayed on first render)
		this.sceneHandler.threeHandler.requestUpdate();
		setTimeout(() => this.sceneHandler.threeHandler.requestUpdate(), 20);
	}

	public set labelOffset(value: number) {
		this.currentLabel?.translateGlobal(new THREE.Vector3(0, 0, -this._labelOffset));
		this._labelOffset = value;
		this.currentLabel?.translateGlobal(new THREE.Vector3(0, 0, this._labelOffset));
		this.sceneHandler.threeHandler.requestUpdate();
	}

	public set labelSize(value: number) {
		this.currentLabel?.scale.set(value, value, value);
		this.sceneHandler.threeHandler.requestUpdate();
	}
}