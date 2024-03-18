import {parse} from 'csv-parse/browser/esm/sync';
import {ThreeHandler} from './ThreeHandler.ts';
import {GlyphLoader} from './GlyphLoader.ts';
import {GuiHandler2} from './GuiHandler2.ts';

const threeHandler = new ThreeHandler();
const glyphLoader = new GlyphLoader(threeHandler.sceneHandler);
const guiHandler2 = new GuiHandler2(threeHandler, glyphLoader);
threeHandler.sceneHandler.guiHandler = guiHandler2;

const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;

await checkAndLoadCsv();

fileUpload.addEventListener('change', checkAndLoadCsv);

async function checkAndLoadCsv() {
	const fileList = fileUpload.files;
	if (fileList === null) return;
	const file = fileList[0];
	if (file === undefined) return;
	const csv = await parse(await file.text());
	guiHandler2.csvAttributes = csv[0];
	guiHandler2.componentStatus = { basicMappings: true };
	await threeHandler.sceneHandler.setCsv(csv);
}