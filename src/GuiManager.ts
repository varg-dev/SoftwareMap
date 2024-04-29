import GUI, {Controller} from 'lil-gui';
import {RenderingManager} from './RenderingManager.ts';
import {SceneManager} from './SceneManager.ts';

export type Mappings = {
	lodThreshold: number,
	labelSettings: {
		labelSize: number,
		labelOffset: number
	},
	shadowMapSettings: {
		sizeExponent: number,
		enabled: boolean
	},
	basicMappings: {
		size: number,
		glyphAtlas: string
	},
	requiredMappings: {
		positionX: string,
		positionY: string,
		glyphType: string
	},
	optionalMappings: Record<string, string>
};

export type MappingsUpdate = {
	lodThreshold?: boolean,
	labelSettings?: {
		labelSize?: boolean,
		labelOffset?: boolean
	},
	shadowMapSettings?: {
		sizeExponent?: boolean,
		enabled?: boolean
	},
	basicMappings?: {
		size?: boolean,
		glyphAtlas?: boolean
	},
	requiredMappings?: {
		positionX?: boolean,
		positionY?: boolean,
		glyphType?: boolean
	},
	optionalMappings?: string
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

export class GuiManager {
	protected mappings: Mappings;

	protected renderingManager: RenderingManager;
	protected sceneManager: SceneManager;

	protected mainGui: GUI;
	protected labelSettingsGui: GUI;
	protected shadowSettingsGui: GUI;
	protected basicMappingsGui: GUI | undefined;
	protected requiredMappingsGui: GUI | undefined;
	protected optionalMappingsGui: GUI | undefined;

	protected _csvAttributes: Array<string>;
	protected _glyphAtlasAxes: Array<string>;
	protected _componentStatus: ComponentStatus;

	constructor(renderingManager: RenderingManager) {
		this.mainGui = new GUI({title: 'Options'});

		this.mappings = {
			lodThreshold: 0.75,
			labelSettings: {
				labelSize: 0.01,
				labelOffset: 0.01
			},
			shadowMapSettings: {
				sizeExponent: 13,
				enabled: true
			},
			basicMappings: {
				size: 0.1,
				glyphAtlas: ''
			},
			requiredMappings: {
				positionX: '',
				positionY: '',
				glyphType: ''
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

		this.renderingManager = renderingManager;
		this.sceneManager = this.renderingManager.sceneManager;
		// (Intended) shallow-copy, will reference the same memory!
		this.sceneManager.mappings = this.mappings;

		this.mainGui.add(this.mappings, 'lodThreshold').name('Distance threshold for LoD').min(0).max(3).onChange(async () => {
			await this.sceneManager.update({ lodThreshold: true });
		});

		this.shadowSettingsGui = this.mainGui.addFolder('Shadow map settings');
		this.shadowSettingsGui.add(this.mappings.shadowMapSettings, 'enabled').name('Use shadow map').onChange(async () => {
			await this.sceneManager.update({ shadowMapSettings: { enabled: true } });
		});
		this.shadowSettingsGui.add(this.mappings.shadowMapSettings, 'sizeExponent').min(8).max(15).step(1).name('Shadow map size exponent').onChange(async () => {
			await this.sceneManager.update({ shadowMapSettings: { sizeExponent: true } });
		});

		this.labelSettingsGui = this.mainGui.addFolder('Label settings');
		this.labelSettingsGui.add(this.mappings.labelSettings, 'labelSize').min(0.005).max(0.05).onChange(async () => {
			await this.sceneManager.update({ labelSettings: { labelSize: true } });
		});
		this.labelSettingsGui.add(this.mappings.labelSettings, 'labelOffset').min(0.01).max(0.1).onChange(async () => {
			await this.sceneManager.update( { labelSettings: { labelOffset: true } } );
		});
	}

	public set csvAttributes(value: Array<string>) {
		// deep-copy array
		this._csvAttributes = [...value];
		// explicitly remove the 'Document' attribute (a string) for now
		const indexOfDocument = this._csvAttributes.indexOf('Document');
		if (indexOfDocument !== -1) this._csvAttributes.splice(indexOfDocument, 1);

		// shallowly deep-copy object (_componentStatus has no nested objects)
		const componentStatus = {...this._componentStatus};
		this.componentStatus = { basicMappings: false, requiredMappings: false, optionalMappings: false };
		this.componentStatus = componentStatus;

		this.clearInvalidMappings();
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

	protected updateBasicMappingStatus(): void {
		if (this._componentStatus.basicMappings) {
			this.basicMappingsGui = this.mainGui.addFolder('Basic mappings');

			this.basicMappingsGui.add(this.mappings.basicMappings, 'size').name('Size multiplier').min(0.01).max(1)
				.onChange(async () => { await this.sceneManager.update( { basicMappings: { size: true } } ); });
			this.basicMappingsGui.add(this.mappings.basicMappings, 'glyphAtlas', this.getGlyphAtlasNames()).name('Glyph atlas')
				.onChange( async () => { await this.sceneManager.update( { basicMappings: { glyphAtlas: true } } ); this.componentStatus = { requiredMappings: true }; });
		} else {
			this.basicMappingsGui?.destroy();
			this.basicMappingsGui = undefined;
		}
	}

	protected updateRequiredMappingStatus(): void {
		if (this._componentStatus.requiredMappings) {
			this.requiredMappingsGui = this.mainGui.addFolder('Required mappings');

			this.requiredMappingsGui.add(this.mappings.requiredMappings, 'positionX', this._csvAttributes).name('x position')
				.onChange(async () => { await this.sceneManager.update( { requiredMappings: { positionX: true } } ); });
			this.requiredMappingsGui.add(this.mappings.requiredMappings, 'positionY', this._csvAttributes).name('y position')
				.onChange(async () => { await this.sceneManager.update( { requiredMappings: { positionY: true } } ); });
			this.requiredMappingsGui.add(this.mappings.requiredMappings, 'glyphType', this._csvAttributes).name('Glyph type')
				.onChange(async () => { await this.sceneManager.update( { requiredMappings: { glyphType: true } } ); });
		} else {
			this.requiredMappingsGui?.destroy();
			this.requiredMappingsGui = undefined;
		}
	}

	protected updateOptionalMappingStatus(): void {
		if (this._componentStatus.optionalMappings) {
			this.optionalMappingsGui = this.mainGui.addFolder('Optional mappings');

			for (const axis of this._glyphAtlasAxes) {
				this.optionalMappingsGui.add(this.mappings.optionalMappings, axis, this._csvAttributes)
					.onChange(async () => { await this.sceneManager.update( { optionalMappings: axis } ); });
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

	protected clearInvalidMappings(): void {
		for (const [key, value] of Object.entries(this.mappings.requiredMappings)) {
			if (value !== undefined && !this._csvAttributes.includes(value)) {
				const controller = this.requiredMappingsGui?.controllers.find((value: Controller) => { return (value.property === key); });
				if (controller !== undefined) controller.setValue('');
			}
		}

		for (const [key, value] of Object.entries(this.mappings.optionalMappings)) {
			if (!this._csvAttributes.includes(value)) {
				const controller = this.optionalMappingsGui?.controllers.find((value: Controller) => { return (value.property === key); });
				if (controller !== undefined) controller.setValue('');
				delete this.mappings.optionalMappings[key];
			}
		}
	}
}