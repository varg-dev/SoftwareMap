import {parse} from 'csv-parse/browser/esm/sync';
import {RenderingManager} from './RenderingManager.ts';
import {GuiManager} from './GuiManager.ts';

const renderingManager = new RenderingManager();
const guiHandler = new GuiManager(renderingManager);

const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;

await checkAndLoadCsv();

fileUpload.addEventListener('change', checkAndLoadCsv);

async function checkAndLoadCsv() {
	const fileList = fileUpload.files;
	if (fileList === null) return;
	const file = fileList[0];
	if (file === undefined) return;
	const csv = await parse(await file.text());
	guiHandler.csvAttributes = csv[0];
	guiHandler.componentStatus = { basicMappings: true };
	renderingManager.sceneManager.csv = csv;
}