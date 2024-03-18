import GUI from 'lil-gui';
import {ThreeHandler} from './ThreeHandler.ts';
import {GlyphLoader} from './GlyphLoader.ts';

type BasicParameters = {
	basicSize: number,
	glyphs: string
}

type RequiredParameters = {
	positionX: string,
	positionY: string,
	glyphType: string
}

export class GuiHandler {
	protected gui: GUI | undefined;
	protected csvFolder: GUI | undefined;
	protected optionalParameters: GUI | undefined;
	protected threeHandler: ThreeHandler;
	protected glyphLoader: GlyphLoader;

	protected csvAttributes: Array<string>;

	protected basicParameters: BasicParameters & Record<string, string | number> | undefined;

	protected requiredMappingParameters: RequiredParameters & Record<string, string> | undefined;

	protected mappingParameters: Record<string, string> | undefined;

	constructor(threeHandler: ThreeHandler, glyphLoader: GlyphLoader) {
		this.threeHandler = threeHandler;
		this.glyphLoader = glyphLoader;
		this.csvAttributes = [];

		this.threeHandler.sceneHandler.guiHandler = this;
	}

	public addGUI(): void {
		this.gui?.destroy();

		this.gui = new GUI();

		this.basicParameters = {
			basicSize: 0.1,
			glyphs: ''
		};

		this.requiredMappingParameters = {
			positionX: '',
			positionY: '',
			glyphType: ''
		};

		this.gui.add(this.basicParameters, 'basicSize').min(0.01).max(1).onChange((value: number) => {
			this.threeHandler.sceneHandler.setBasicSize(value);
		});

		this.gui.add(this.basicParameters, 'glyphs', this.getGlyphAtlasNames()).onChange(async (value: string) => {
			await this.glyphLoader.setGlyphAtlas(value + '.json');
		});

		for (const key in this.requiredMappingParameters) {
			this.requiredMappingParameters[key] = '';
		}
	}

	public addCsvFolder(): void {
		this.csvFolder?.destroy();

		this.csvFolder = this.gui?.addFolder('Name of CSV columns that govern...');

		this.mappingParameters = {};
		for (const key in this.requiredMappingParameters) {
			this.csvFolder!.add(this.requiredMappingParameters, key, this.csvAttributes).onFinishChange(async (value: string) => {
				await this.threeHandler.sceneHandler.setMapping(key, value, true);
			});
		}
	}

	public addOptionalFolder(): void {
		if (this.optionalParameters !== undefined) this.optionalParameters?.destroy();
		if (this.csvFolder === undefined) return;

		this.optionalParameters = this.csvFolder.addFolder('Optional mappings');

		for (const mappingParameter in this.mappingParameters) {
			this.optionalParameters.add(this.mappingParameters, mappingParameter, this.csvAttributes).onFinishChange(async (value: string) => {
				await this.threeHandler.sceneHandler.setMapping(mappingParameter, value, true);
			});
		}
	}

	public removeOptionalFolder(): void {
		if (this.optionalParameters === undefined) return;

		this.hideOptionalFolder();

		this.mappingParameters = {};
	}

	public hideOptionalFolder(): void {
		if (this.optionalParameters === undefined) return;

		this.optionalParameters.destroy();
		this.optionalParameters = undefined;
	}

	public addAttributes(attributes: Array<string>) {
		if (this.mappingParameters === undefined) this.mappingParameters = {};

		for (const attribute of attributes) {
			this.mappingParameters[attribute] = '';
		}
	}

	protected getGlyphAtlasNames(): string[] {
		const glyphNamesRecord = import.meta.glob('/public/*.json');
		const glyphNames: string[] = [];

		for (const glyphName in glyphNamesRecord) {
			const sanitizedFront = glyphName.substring(glyphName.lastIndexOf('/') + 1);
			const sanitizedAll = sanitizedFront.substring(0, sanitizedFront.lastIndexOf('.'));
			glyphNames.push(sanitizedAll);
		}

		return glyphNames;
	}

	public setCsvAttributes(csvAttributes: Array<string>) {
		this.csvAttributes = csvAttributes;
	}
}