import * as THREE from 'three';
import {FontFace, FontFaceLoader} from 'three-openll-labels';
import {SceneManager} from "./SceneManager.ts";
import {SplitLabel} from "./SplitLabel.ts";

export class PickingHandler {
	protected sceneManager: SceneManager;
	protected canvas: HTMLCanvasElement;
	protected fontFace: FontFace;

	protected currentLabel: SplitLabel | undefined;
	protected csvRow: Array<string> | undefined;
	protected labelGroup: THREE.Group;

	protected _labelOffset: number = 0.01;
	protected _labelSize: number = 0.01;

	constructor(sceneManager: SceneManager) {
		this.sceneManager = sceneManager;

		this.labelGroup = new THREE.Group();
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
		this.csvRow = csv[value];
		let keyText = '';
		let valueText = '';
		for (let i = 0; i < csv[0].length; ++i) {
			keyText += csv[0][i] + ': ';

			// If i references the "Document" column...
			if (i == 0) {
				valueText += this.csvRow[i];
			} else {
				const value = Number(this.csvRow[i]);
				valueText += Math.round(value) !== value ? value.toFixed(5) : value;
			}

			// line breaks at the end of the label text seem to make the labeling system put this line break before the last word
			if (i < csv[0].length - 1) {
				keyText += '\n';
				valueText += '\n';
			}
		}
		const label = new SplitLabel(keyText, valueText, this.fontFace, new THREE.Color(0xffffff));

		label.material.onBeforeCompile = (parameters: THREE.WebGLProgramParametersWithUniforms) => {
			const insertionPoint = parameters.fragmentShader.indexOf('}');
			parameters.fragmentShader =
				'layout(location = 1) out vec4 id;\n'
				+ parameters.fragmentShader.substring(0, insertionPoint)
				+ 'id = vec4(vec3(0.), 1.);\n'
				+ parameters.fragmentShader.substring(insertionPoint);
		};

		const position = this.sceneManager.calculatePosition(this.csvRow);
		label.position.set(position.x, 0.001, position.y);
		label.scale.set(this._labelSize, this._labelSize, this._labelSize);
		label.rotateX(3 * Math.PI / 2);
		label.translateGlobal(new THREE.Vector3(0, 0, this._labelOffset));

		this.currentLabel = label;
		this.currentLabel.addToObject3D(this.labelGroup);

		// render twice to actually display label (label is never displayed on first render)
		this.sceneManager.renderingManager.requestUpdate();
		setTimeout(() => this.sceneManager.renderingManager.requestUpdate(), 20);
	}

	public updateLabelPosition(): void {
		if (this.csvRow === undefined) return;

		const position = this.sceneManager.calculatePosition(this.csvRow);
		this.currentLabel?.position.set(position.x, 0.001, position.y);
		this.sceneManager.renderingManager.requestUpdate();
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