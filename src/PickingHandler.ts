import * as THREE from 'three';
import {FontFace, FontFaceLoader, Label} from 'three-openll-labels';
import Alignment = Label.Alignment;
import {SceneManager} from "./SceneManager.ts";
import {Group, Material, WebGLProgramParametersWithUniforms} from "three";

export class PickingHandler {
	protected sceneManager: SceneManager;
	protected canvas: HTMLCanvasElement;
	protected fontFace: FontFace;

	protected currentLabel: Label | undefined;
	protected labelGroup: Group;

	protected _labelOffset: number = 0.01;
	protected _labelSize: number = 0.01;

	constructor(sceneManager: SceneManager) {
		this.sceneManager = sceneManager;

		this.labelGroup = new Group();
		this.sceneManager.scene.add(this.labelGroup);

		this.canvas = this.sceneManager.renderingManager.canvas;

		this.fontFace = new FontFaceLoader().load(
			'roboto-regular-f00f2383',
			() => { this.canvas.addEventListener('pointerdown', (event: PointerEvent) => { this.handlePointerDown(event); }); },
			undefined,
			(error: unknown) => { console.error(error); }
		);
	}

	protected handlePointerDown(event: PointerEvent) {
		if (event.button !== 0 || !(event.ctrlKey || event.altKey)) return;

		// only ever have one label
		this.currentLabel?.dispose();
		this.labelGroup.clear();

		const value = this.sceneManager.renderingManager.getIdFromPixel((event.clientX / this.canvas.clientWidth) * 2 - 1, 1 - (event.clientY / this.canvas.clientHeight) * 2);

		// no intersections with glyphs exist
		if (value === null) {
			if (this.currentLabel !== undefined) {
				this.currentLabel = undefined;
				this.sceneManager.renderingManager.requestUpdate();
			}
			return;
		}

		const csv = this.sceneManager.csv;
		if (csv === undefined) return;
		const csvRow = csv[value];
		let labelText = '';
		for (let i = 0; i < csv[0].length; ++i) {
			labelText += csv[0][i] + ': ' + csvRow[i];

			// line breaks at the end of the label text seem to make the labeling system put this line break before the last word
			if (i < csv[0].length - 1)
				labelText += '\n';
		}
		const label = new Label(labelText, this.fontFace, new THREE.Color(0xffffff));

		// @ts-expect-error: Unfortunately, this must be accessed in order to add the second fragment shader output to avoid a WebGL warning
		(label._mesh.material as Material).onBeforeCompile = (parameters: WebGLProgramParametersWithUniforms) => {
			const insertionPoint = parameters.fragmentShader.indexOf('}');
			parameters.fragmentShader =
				'layout(location = 1) out vec4 id;\n'
				+ parameters.fragmentShader.substring(0, insertionPoint)
				+ 'id = vec4(vec3(0.), 1.);\n'
				+ parameters.fragmentShader.substring(insertionPoint);
		};

		const position = this.sceneManager.calculatePosition(csvRow);
		label.position.set(position.x, 0.001, position.y);
		label.scale.set(this._labelSize, this._labelSize, this._labelSize);
		label.rotateX(3 * Math.PI / 2);
		label.alignment = Alignment.Center;
		label.translateGlobal(new THREE.Vector3(0, 0, this._labelOffset));

		this.currentLabel = label;
		this.labelGroup.add(this.currentLabel);

		// render twice to actually display label (label is never displayed on first render)
		this.sceneManager.renderingManager.requestUpdate();
		setTimeout(() => this.sceneManager.renderingManager.requestUpdate(), 20);
	}

	public set labelOffset(value: number) {
		this.currentLabel?.translateGlobal(new THREE.Vector3(0, 0, -this._labelOffset));
		this._labelOffset = value;
		this.currentLabel?.translateGlobal(new THREE.Vector3(0, 0, this._labelOffset));
		this.sceneManager.renderingManager.requestUpdate();
	}

	public set labelSize(value: number) {
		this._labelSize = value;
		this.currentLabel?.scale.set(this._labelSize, this._labelSize, this._labelSize);
		this.sceneManager.renderingManager.requestUpdate();
	}
}