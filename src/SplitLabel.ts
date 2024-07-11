import * as THREE from 'three';
import {FontFace, Label} from "three-openll-labels";

export class SplitLabel {
    public keyColumn: Label;
    public valueColumn: Label;

    protected _position: Vector3Wrapper;
    protected _scale: Vector3Wrapper;
    protected _material: MaterialWrapper;

    constructor(keyString: string, valueString: string, fontFace: FontFace, color: THREE.Color) {
        this.keyColumn = new Label(keyString, fontFace, color);
        this.keyColumn.alignment = Label.Alignment.Right;
        // @ts-expect-error This is (rightfully) protected, but no other way to change this setting is exposed.
        this.keyColumn.material.depthFunc = THREE.AlwaysDepth;
        // @ts-expect-error This is (rightfully) protected, but no other way to change this setting is exposed.
        this.keyColumn.mesh.renderOrder = -1;
        this.valueColumn = new Label(valueString, fontFace, color);
        this.valueColumn.alignment = Label.Alignment.Left;
        // @ts-expect-error This is (rightfully) protected, but no other way to change this setting is exposed.
        this.valueColumn.material.depthFunc = THREE.AlwaysDepth;
        // @ts-expect-error This is (rightfully) protected, but no other way to change this setting is exposed.
        this.valueColumn.mesh.renderOrder = -1;

        this._position = new Vector3Wrapper(this);
        this._scale = new Vector3Wrapper(this, true);
        this._material = new MaterialWrapper(this);
    }

    public dispose(): void {
        this.keyColumn.dispose();
        this.valueColumn.dispose();
    }

    public rotateX(value: number): void {
        this.keyColumn.rotateX(value);
        this.valueColumn.rotateX(value);
    }

    public translateGlobal(offset: THREE.Vector3): void {
        this.keyColumn.translateGlobal(offset);
        this.valueColumn.translateGlobal(offset);
    }

    public addToObject3D(object: THREE.Object3D): void {
        object.add(this.keyColumn);
        object.add(this.valueColumn);
    }

    public get position(): Vector3Wrapper {
        return this._position;
    }

    public get scale(): Vector3Wrapper {
        return this._scale;
    }

    public get material(): MaterialWrapper {
        return this._material;
    }
}

class Vector3Wrapper {
    protected splitLabel: SplitLabel;
    protected isScaleVector: boolean;

    constructor(splitLabel: SplitLabel, isScaleVector?: boolean) {
        this.splitLabel = splitLabel;

        this.isScaleVector = (isScaleVector !== undefined) ? isScaleVector : false;
    }

    public set(x: number, y: number, z: number): void {
        if (this.isScaleVector) {
            this.splitLabel.keyColumn.scale.set(x, y, z);
            this.splitLabel.valueColumn.scale.set(x, y, z);
        } else {
            this.splitLabel.keyColumn.position.set(x, y, z);
            this.splitLabel.valueColumn.position.set(x, y, z);
        }
    }
}

class MaterialWrapper {
    protected splitLabel: SplitLabel;

    constructor(splitLabel: SplitLabel) {
        this.splitLabel = splitLabel;
    }

    public set onBeforeCompile(value: (parameters: THREE.WebGLProgramParametersWithUniforms) => void) {
        // @ts-expect-error: Unfortunately, this must be accessed in order to add the second fragment shader output to avoid a WebGL warning
        (this.splitLabel.keyColumn._mesh.material as THREE.Material).onBeforeCompile = value;
        // @ts-expect-error: See above
        (this.splitLabel.valueColumn._mesh.material as THREE.Material).onBeforeCompile = value;
    }
}