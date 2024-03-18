import GUI from 'lil-gui';
import {ThreeHandler} from './ThreeHandler.ts';
import {GlyphLoader} from './GlyphLoader.ts';

type Mappings = {
	basicMappings: {
		size: number | undefined,
		glyphAtlas: string | undefined
	},
	requiredMappings: {
		positionX: string | undefined,
		positionY: string | undefined,
		glyphType: string | undefined
	},
	optionalMappings: Record<string, string>
};

export type ComponentStatus = {
	basicMappings: boolean,
	requiredMappings: boolean,
	optionalMappings: boolean
};

export type ComponentStatusUpdate = {
	basicMappings?: boolean,
	requiredMappings?: boolean,
	optionalMappings?: boolean
};

export class GuiHandler2 {
	protected mappings: Mappings;

	protected threeHandler: ThreeHandler;
	protected glyphLoader: GlyphLoader;

	protected mainGui: GUI;
	protected basicMappingsGui: GUI | undefined;
	protected requiredMappingsGui: GUI | undefined;
	protected optionalMappingsGui: GUI | undefined;

	protected _csvAttributes: Array<string>;
	protected _glyphAtlasAxes: Array<string>;
	protected _componentStatus: ComponentStatus;

	constructor(threeHandler: ThreeHandler, glyphLoader: GlyphLoader) {
		this.mainGui = new GUI({title: 'Options'});
		this.mappings = {
			basicMappings: {
				size: 0.5,
				glyphAtlas: ''
			},
			requiredMappings: {
				positionX: undefined,
				positionY: undefined,
				glyphType: undefined
			},
			optionalMappings: {}
		};
		this._componentStatus = {
			basicMappings: false,
			requiredMappings: false,
			optionalMappings: false
		};
		this._csvAttributes = [];
		this._glyphAtlasAxes = [];

		this.threeHandler = threeHandler;
		this.glyphLoader = glyphLoader;
	}

	public set csvAttributes(value: Array<string>) {
		this._csvAttributes = value;
	}

	public set glyphAtlasAxes(value: Array<string>) {
		this._glyphAtlasAxes = value;
	}

	public set componentStatus(value: ComponentStatusUpdate) {
		if (value.basicMappings !== undefined && this._componentStatus.basicMappings !== value.basicMappings) {
			this._componentStatus.basicMappings = value.basicMappings;
			this.updateBasicMappingStatus();
		}
		if (value.requiredMappings !== undefined && this._componentStatus.requiredMappings !== value.requiredMappings) {
			this._componentStatus.requiredMappings = value.requiredMappings;
			this.updateRequiredMappingStatus();
		}
		if (value.optionalMappings !== undefined && this._componentStatus.optionalMappings !== value.optionalMappings) {
			this._componentStatus.optionalMappings = value.optionalMappings;
			this.updateOptionalMappingStatus();
		}
	}

	protected updateBasicMappingStatus() {
		if (this._componentStatus.basicMappings) {
			this.basicMappingsGui = this.mainGui.addFolder('Basic mappings');

			this.basicMappingsGui.add(this.mappings.basicMappings, 'size').name('Size multiplier').min(0.01).max(1)
				.onChange((value: number) => { this.threeHandler.sceneHandler.setBasicSize(value); });
			this.basicMappingsGui.add(this.mappings.basicMappings, 'glyphAtlas', this.getGlyphAtlasNames()).name('Glyph atlas')
				.onChange( async (value: string) => { await this.glyphLoader.setGlyphAtlas(value + '.json'); });
		} else {
			this.basicMappingsGui?.destroy();
			this.basicMappingsGui = undefined;
		}
	}

	protected updateRequiredMappingStatus() {
		if (this._componentStatus.requiredMappings) {
			this.requiredMappingsGui = this.mainGui.addFolder('Required mappings');

			this.requiredMappingsGui.add(this.mappings.requiredMappings, 'posX', this._csvAttributes).name('x position')
				.onChange(async (value: string) => { await this.threeHandler.sceneHandler.setMapping('positionX', value, true); });
			this.requiredMappingsGui.add(this.mappings.requiredMappings, 'posY', this._csvAttributes).name('y position')
				.onChange(async (value: string) => { await this.threeHandler.sceneHandler.setMapping('positionY', value, true); });
			this.requiredMappingsGui.add(this.mappings.requiredMappings, 'glyphType', this._csvAttributes).name('Glyph type')
				.onChange(async (value: string) => { await this.threeHandler.sceneHandler.setMapping('glyphType', value, true); });
		} else {
			this.requiredMappingsGui?.destroy();
			this.requiredMappingsGui = undefined;
		}
	}

	protected updateOptionalMappingStatus() {
		if (this._componentStatus.optionalMappings) {
			this.optionalMappingsGui = this.mainGui.addFolder('Optional mappings');

			for (const axis of this._glyphAtlasAxes) {
				this.optionalMappingsGui.add(this.mappings.optionalMappings, axis, this._csvAttributes)
					.onChange(async (value: string) => { await this.threeHandler.sceneHandler.setMapping(axis, value, true); });
			}
		} else {
			this.optionalMappingsGui?.destroy();
			this.optionalMappingsGui = undefined;
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
}