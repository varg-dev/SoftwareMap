import {parse} from 'csv-parse/browser/esm/sync';
import {ThreeHandler} from './ThreeHandler.ts';
import GUI from 'lil-gui';

let csv: Array<Array<string>>;
const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
fileUpload.addEventListener('change', async () => {
	const fileList = fileUpload.files;
	if (!fileList) return;
	const file = fileList[0];
	if (!file) return;
	csv = await parse(await file.text());
	await threeHandler.sceneHandler.createScene(csv);
});

const gui = new GUI();

const basicParameters = {
	maxVariation: 0.2,
	basicSize: 0.1,
	glyphs: 'TreesA_Mod'
};

const mappingParameters = {
	positionX: 'x',
	positionY: 'y',
	size: 'Comments_normalized',
	mesh: 'LoC_normalized'
};

gui.add(basicParameters, 'maxVariation').min(0.1).max(1).onChange((value: number) => {
	threeHandler.sceneHandler.setMaxVariation(value);
});

gui.add(basicParameters, 'basicSize').min(0.01).max(1).onChange((value: number) => {
	threeHandler.sceneHandler.setBasicSize(value);
});

const csvFolder = gui.addFolder('Name of CSV columns that govern...');

for (const mappingParameter in mappingParameters) {
	csvFolder.add(mappingParameters, mappingParameter).onFinishChange(async (value: string) => {
		await threeHandler.sceneHandler.setMapping(mappingParameter, value);
	});
}

const glyphNamesRecord = import.meta.glob('/public/*.glb');
const glyphNames: string[] = [];

for (const glyphName in glyphNamesRecord) {
	const sanitizedFront = glyphName.substring(glyphName.lastIndexOf('/') + 1);
	const sanitizedAll = sanitizedFront.substring(0, sanitizedFront.lastIndexOf('.'));
	glyphNames.push(sanitizedAll);
}

gui.add(basicParameters, 'glyphs', glyphNames).onChange(async (value: string) => {
	await threeHandler.sceneHandler.setGLTF(value + '.glb');
});

const threeHandler = new ThreeHandler();