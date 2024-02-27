import {parse} from 'csv-parse/browser/esm/sync';
import {ThreeHandler} from './ThreeHandler.ts';
import {GlyphLoader} from './GlyphLoader.ts';
import {GuiHandler} from './GuiHandler.ts';

const threeHandler = new ThreeHandler();
const glyphLoader = new GlyphLoader(threeHandler.sceneHandler);
new GuiHandler(threeHandler, glyphLoader);

const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;

await checkAndLoadCsv();

fileUpload.addEventListener('change', checkAndLoadCsv);

async function checkAndLoadCsv() {
	const fileList = fileUpload.files;
	if (fileList === null) return;
	const file = fileList[0];
	if (file === undefined) return;
	const csv = await parse(await file.text());
	await threeHandler.sceneHandler.setCsv(csv);
}