import {parse} from 'csv-parse/browser/esm/sync';
import {RenderingManager} from './RenderingManager.ts';
import {GuiManager} from './GuiManager.ts';
import {type CSV} from './SceneManager.ts';

const renderingManager = new RenderingManager();
const guiManager = new GuiManager(renderingManager);

const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;

await checkAndLoadCsv();

fileUpload.addEventListener('change', checkAndLoadCsv);

async function checkAndLoadCsv() {
	const fileList = fileUpload.files;
	if (fileList === null) return;
	const file = fileList[0];
	if (file === undefined) return;
	const csv = await parse(await file.text());

	removeLongestCommonPrefix(csv);

	guiManager.csvAttributes = csv[0];
	guiManager.componentStatus = { basicMappings: true };
	renderingManager.sceneManager.csv = csv;
}

function removeLongestCommonPrefix(csv: CSV) {
	let indexAfterPrefix = 0;

	// First line contains column names
	outerLoop:
	for (let charIndex = 0; charIndex < csv[1][0].length; ++charIndex) {
		for (let line = 2; line < csv.length; ++line) {
			if (csv[line][0][charIndex] !== csv[1][0][charIndex] && !csv[line][0].includes('___Landmark')) {
				break outerLoop;
			}
		}

		++indexAfterPrefix;
	}

	for (let line = 1; line < csv.length; ++line) {
		if (csv[line][0].includes('___Landmark')) return;
		csv[line][0] = csv[line][0].substring(indexAfterPrefix);
	}
}