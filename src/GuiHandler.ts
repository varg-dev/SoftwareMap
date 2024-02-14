import GUI from 'lil-gui';
import {ThreeHandler} from './ThreeHandler.ts';
import {GlyphLoader} from './GlyphLoader.ts';

export class GuiHandler {
	protected gui!: GUI;
	protected csvFolder!: GUI;
	protected threeHandler: ThreeHandler;
	protected glyphLoader: GlyphLoader;

	protected basicParameters = {
		basicSize: 0.1,
		glyphs: ''
	};

	protected originalMappingParameters: Record<string, string> = {
		positionX: '',
		positionY: '',
		glyphType: ''
	};

	protected mappingParameters: Record<string, string> = {
	};

	constructor(threeHandler: ThreeHandler, glyphLoader: GlyphLoader) {
		this.threeHandler = threeHandler;
		this.glyphLoader = glyphLoader;

		this.threeHandler.sceneHandler.guiHandler = this;

		this.resetGui();
	}

	public resetGui(): void {
		if (this.gui) this.gui.destroy();

		this.gui = new GUI();

		this.gui.add(this.basicParameters, 'basicSize').min(0.01).max(1).onChange((value: number) => {
			this.threeHandler.sceneHandler.setBasicSize(value);
		});

		this.csvFolder = this.gui.addFolder('Name of CSV columns that govern...');


		this.mappingParameters = {};
		for (const key in this.originalMappingParameters) {
			this.mappingParameters[key] = this.originalMappingParameters[key];
		}
		for (const mappingParameter in this.mappingParameters) {
			this.csvFolder.add(this.mappingParameters, mappingParameter).onFinishChange(async (value: string) => {
				await this.threeHandler.sceneHandler.setMapping(mappingParameter, value, true);
			});
		}

		const glyphNamesRecord = import.meta.glob('/public/*.json');
		const glyphNames: string[] = [];

		for (const glyphName in glyphNamesRecord) {
			const sanitizedFront = glyphName.substring(glyphName.lastIndexOf('/') + 1);
			const sanitizedAll = sanitizedFront.substring(0, sanitizedFront.lastIndexOf('.'));
			glyphNames.push(sanitizedAll);
		}

		this.gui.add(this.basicParameters, 'glyphs', glyphNames).onChange(async (value: string) => {
			await this.glyphLoader.setGlyphAtlas(value + '.json');
		});
	}

	public async addAttributes(attributes: Array<string>) {
		for (const attribute of attributes) {
			this.mappingParameters[attribute] = '';
			this.csvFolder.add(this.mappingParameters, attribute).onFinishChange(async (value: string) => {
				await this.threeHandler.sceneHandler.setMapping(attribute, value, true);
			});

			await this.threeHandler.sceneHandler.setMapping(attribute, '');
		}
	}
}