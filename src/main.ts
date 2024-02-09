import {parse} from 'csv-parse/browser/esm/sync';
import {ThreeHandler} from './ThreeHandler.ts';
import {GlyphLoader} from './GlyphLoader.ts';
import {GuiHandler} from './GuiHandler.ts';

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

const threeHandler = new ThreeHandler();
const glyphLoader = new GlyphLoader(threeHandler.sceneHandler);
const guiHandler = new GuiHandler(threeHandler, glyphLoader);