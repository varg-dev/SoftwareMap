import * as THREE from 'three';
import {GlyphAtlas, GlyphLoader} from './GlyphLoader.ts';
import {type Mappings, MappingsUpdate} from './GuiManager.ts';
import {Object3D} from "three";

type CSV = Array<Array<string>>;

export class SceneManager {
    readonly scene: THREE.Scene;
    protected staticElements: THREE.Group;
    // Use additional group to clear placed glyphs without clearing plane, lighting etc.
    protected glyphGroup: THREE.Group;

    protected _csv: CSV | undefined;

    protected glyphAtlas: GlyphAtlas | undefined;
    protected glyphLoader: GlyphLoader;
    protected glyphToCsvMapping: Array<{ glyphIndex: number, csvRow: number }> | undefined;
    protected instancedGlyphs: Array<{ positionAttributes: THREE.BufferAttribute, meshes: Array<THREE.Mesh> }> | undefined;

    protected _mappings: Mappings | undefined;

    constructor() {
        this.glyphLoader = new GlyphLoader();

        this.scene = new THREE.Scene();
        this.staticElements = new THREE.Group();
        this.glyphGroup = new THREE.Group();

        this.setUpStaticElements();
    }

    protected setUpStaticElements(): void {
        this.scene.background = new THREE.Color(0xaaaacc);

        // Lighting
        this.staticElements.add(new THREE.AmbientLight(0xdddddd));
        const pointLight = new THREE.PointLight(0xffffff, 1, 0, 0);
        pointLight.castShadow = true;
        pointLight.shadow.mapSize = new THREE.Vector2(4096, 4096);
        pointLight.position.set(-0.5, 2, 1);
        this.staticElements.add(pointLight);

        // Grid
        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(2.25, 2.25),
            new THREE.MeshPhongMaterial({ color: 0xccccdd, side: THREE.DoubleSide })
        );
        plane.rotateX(Math.PI / 2);
        plane.translateY(-0.0001);
        plane.receiveShadow = true;
        this.staticElements.add(plane);

        const grid = new THREE.GridHelper(2.25, 100);
        grid.receiveShadow = true;
        this.staticElements.add(grid);

        this.scene.add(this.staticElements);
    }

    public set csv(value: CSV) {
        this._csv = value;

        if (this.glyphAtlas === undefined) return;

        this.calculateGlyphIndices();
        this.createInstancedMeshes();
    }

    protected createInstancedMeshes(): void {

    }

    protected calculateGlyphIndices(): void {
        if (!this.sceneCanBeDrawn()) return;

        this.glyphToCsvMapping = [];

        for (const [index, row] of this._csv!.entries()) {
            if (index === 0) continue;
            this.glyphToCsvMapping.push({ glyphIndex: this.calculateGlyphIndex(row), csvRow: index });
        }
    }

    protected calculateGlyphIndex(csvRow: Array<string>): number {
        const glyphTypeSelectionColumn = this._csv![0].indexOf(this._mappings!.requiredMappings.glyphType!);
        let glyphTypeSelectionValue = Number(csvRow[glyphTypeSelectionColumn]);

        if (glyphTypeSelectionValue === undefined) {
            console.error('The column selected for glyphType (' + this._mappings!.requiredMappings.glyphType! + ') contains at least one value that cannot be casted to a number: ' + csvRow[glyphTypeSelectionColumn]);
            return -1;
        }
        if (glyphTypeSelectionValue !== Math.round(glyphTypeSelectionValue)) {
            console.warn('The value given as glyphType is not integer (' + glyphTypeSelectionValue + '). Because of this, the value has been rounded.');
            glyphTypeSelectionValue = Math.round(glyphTypeSelectionValue);
        }
        // If more distinct values of the csv column mapped to glyphType exist (or the values are too large), we wrap around (while preventing NaN)
        if (this.glyphAtlas?.json.types.length === 1) {
            console.warn('The selected glyph atlas only provides one type of glyph. The mapping of glyphType has no effect.');
            glyphTypeSelectionValue = 0;
        }
        else if (glyphTypeSelectionValue >= this.glyphAtlas!.json.types.length) {
            console.warn('The value used to select the glyph type (' + glyphTypeSelectionValue + ') is larger than the amount of available types. This value will be wrapped around.');
            glyphTypeSelectionValue %= this.glyphAtlas!.json.types.length - 1;
        }

        let largestValidVariantIndex = -1;

        const glyphType = this.glyphAtlas!.json.types[glyphTypeSelectionValue];
        for (const [index, variant] of glyphType.variants.entries()) {
            let variantIsValid = true;

            for (const [key, value] of Object.entries(variant)) {
                if (key === 'name') continue;
                if (this._mappings!.optionalMappings[key] === undefined) continue;

                if (Number(csvRow[csvRow.indexOf(this._mappings!.optionalMappings[key])]) < (value as number)) {
                    variantIsValid = false;
                    break;
                }
            }

            if (variantIsValid) largestValidVariantIndex = index;
        }

        let selectedGlyphName = '';

        if (largestValidVariantIndex === -1) {
            console.warn('No valid variant could be found for the current row ' + csvRow + '. The base model of the selected type will be used.');
            selectedGlyphName = glyphType.baseModel;
        } else {
            selectedGlyphName = glyphType.variants[largestValidVariantIndex].name;
        }

        return this.glyphAtlas!.glyphs.findIndex((value: Object3D) => { return selectedGlyphName === value.name } );
    }

    protected sceneCanBeDrawn(): boolean {
        return (
            this._csv !== undefined
            && this._csv[0].length !== 0
            && this._mappings !== undefined
            && this._mappings.basicMappings.glyphAtlas !== ''
            && this._mappings.requiredMappings.positionX !== ''
            && this._mappings.requiredMappings.positionY !== ''
            && this._mappings.requiredMappings.glyphType !== ''
            && this.glyphAtlas !== undefined
        );
    }

    public set mappings(value: Mappings) {
        this._mappings = value;
    }

    public async update(value: MappingsUpdate): Promise<void> {
        if (value.labelSettings?.labelSize) {
            // PickingManager stuff...
        }
        if (value.labelSettings?.labelOffset) {
            // PickingManager stuff...
        }
        if (value.basicMappings?.size) {
            // Scale stuff...
        }
        if (value.basicMappings?.glyphAtlas) {
            if (this._mappings?.basicMappings.glyphAtlas !== undefined) {
                const possibleGlyphAtlas = await this.glyphLoader.getGlyphAtlas(this._mappings?.basicMappings.glyphAtlas + '.json');
                if (possibleGlyphAtlas !== null) this.glyphAtlas = possibleGlyphAtlas;
            }
        }
        if (value.requiredMappings?.positionX || value.requiredMappings?.positionY) {
            // Move stuff...
        }
        if (value.requiredMappings?.glyphType) {
            // Place different glyphs...
        }
        if (value.optionalMappings !== undefined) {
            // Change variant...
        }
    }
}