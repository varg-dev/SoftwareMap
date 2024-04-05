import * as THREE from 'three';
import {GlyphAtlas, GlyphLoader} from './GlyphLoader.ts';
import {type Mappings, MappingsUpdate} from './GuiManager.ts';
import {Object3D} from 'three';
import {RenderingManager} from './RenderingManager.ts';

type CSV = Array<Array<string>>;
type CsvAndIndices = {
	csv: CSV,
	positionIndices?: THREE.Vector2
};

export class SceneManager {
	readonly scene: THREE.Scene;
	protected renderingManager: RenderingManager;

	protected staticElements: THREE.Group;
	// Use additional group to clear placed glyphs without clearing plane, lighting etc.
	protected glyphGroup: THREE.Group;

	protected _csv: CsvAndIndices | undefined;

	protected glyphAtlas: GlyphAtlas | undefined;
	protected glyphLoader: GlyphLoader;
	protected glyphToCsvMapping: Array<{ glyphIndex: number, csvRow: number }> | undefined;
	protected instancedGlyphs: Array<{ positionAttributes: THREE.BufferAttribute, meshes: Array<THREE.Mesh> }> | undefined;

	protected _mappings: Mappings | undefined;
	protected xAndYBounds: { min: THREE.Vector2, max: THREE.Vector2 } | undefined;

	constructor(renderingManager: RenderingManager) {
		this.glyphLoader = new GlyphLoader();
		this.renderingManager = renderingManager;

		this.scene = new THREE.Scene();
		this.staticElements = new THREE.Group();
		this.glyphGroup = new THREE.Group();

		this.scene.add(this.staticElements);
		this.scene.add(this.glyphGroup);

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
	}

	public set csv(value: CSV) {
		this._csv = { csv: value };

		if (this.glyphAtlas === undefined) return;
		if (this._mappings !== undefined) this.findAttributeBounds();

		this.calculateGlyphIndices();
		this.createInstancedMeshes();
	}

	protected createInstancedMeshes(): void {
		if (!this.sceneCanBeDrawn() || this.glyphToCsvMapping === undefined) return;
		if (this.xAndYBounds === undefined) this.findAttributeBounds();

		this.glyphGroup.clear();

		const scale = this._mappings!.basicMappings.size / this.glyphAtlas!.largestExtent;

		for (const glyphMapping of this.glyphToCsvMapping) {
			const glyph = this.glyphAtlas!.glyphs[glyphMapping.glyphIndex].clone(true);
			const position = this.calculatePosition(this._csv!.csv[glyphMapping.csvRow]);
			glyph.position.set(position.x, 0, position.y);
			glyph.scale.set(scale, scale, scale);
			this.glyphGroup.add(glyph);
		}

		this.renderingManager.requestUpdate();
	}

	protected calculateGlyphIndices(): void {
		if (!this.sceneCanBeDrawn()) return;

		this.glyphToCsvMapping = [];

		for (const [index, row] of this._csv!.csv.entries()) {
			if (index === 0) continue;
			this.glyphToCsvMapping.push({ glyphIndex: this.calculateGlyphIndex(row), csvRow: index });
		}
	}

	protected calculateGlyphIndex(csvRow: Array<string>): number {
		const glyphTypeSelectionColumn = this._csv!.csv[0].indexOf(this._mappings!.requiredMappings.glyphType!);
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

		return this.glyphAtlas!.glyphs.findIndex((value: Object3D) => { return selectedGlyphName === value.name; } );
	}

	protected findAttributeBounds(): void {
		if (this._csv === undefined || this._mappings === undefined) return;

		this.xAndYBounds = {
			min: new THREE.Vector2(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY),
			max: new THREE.Vector2(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY)
		};

		this._csv.positionIndices = new THREE.Vector2(this._csv.csv[0].indexOf(this._mappings.requiredMappings.positionX), this._csv.csv[0].indexOf(this._mappings.requiredMappings.positionY));

		for (const [index, row] of this._csv.csv.entries()) {
			if (index === 0) continue;

			const x = Number(row[this._csv.positionIndices.x]);
			const y = Number(row[this._csv.positionIndices.y]);

			if (x < this.xAndYBounds.min.x) this.xAndYBounds.min.x = x;
			if (x > this.xAndYBounds.max.x) this.xAndYBounds.max.x = x;
			if (y < this.xAndYBounds.min.y) this.xAndYBounds.min.y = y;
			if (y > this.xAndYBounds.max.y) this.xAndYBounds.max.y = y;
		}
	}

	protected calculatePosition(csvRow: Array<string>): THREE.Vector2 {
		const position = new THREE.Vector2(Number(csvRow[this._csv!.positionIndices!.x]), Number(csvRow[this._csv!.positionIndices!.y]));
		position.sub(this.xAndYBounds!.min).divide(this.xAndYBounds!.max.clone().sub(this.xAndYBounds!.min)).multiplyScalar(2).subScalar(1);
		return position;
	}

	protected sceneCanBeDrawn(): boolean {
		return (
			this._csv !== undefined
            && this._csv.csv[0].length !== 0
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

		if (this._csv !== undefined) this.findAttributeBounds();

		this.calculateGlyphIndices();
		this.createInstancedMeshes();
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
			this.calculateGlyphIndices();
			this.createInstancedMeshes();
		}
		if (value.requiredMappings?.positionX || value.requiredMappings?.positionY) {
			this.createInstancedMeshes();
		}
		if (value.requiredMappings?.glyphType) {
			this.calculateGlyphIndices();
			this.createInstancedMeshes();
		}
		if (value.optionalMappings !== undefined) {
			this.calculateGlyphIndices();
			this.createInstancedMeshes();
		}
	}
}