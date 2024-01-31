import {parse} from 'csv-parse/browser/esm/sync';
import {ThreeHandler} from "./ThreeHandler.ts";
import GUI from "lil-gui";

let csv: Array<Array<string>>;
const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
fileUpload.addEventListener('change', async () => {
    const file = fileUpload.files.item(0);
    if (!file) return;
    csv = await parse(await file.text());
    await threeHandler.sceneHandler.createScene(csv);
});

const gui = new GUI();

const basicParameters = {
    maxVariation: 0.2,
    basicSize: 0.1
};

const mappingParameters = {
    positionX: '',
    positionY: '',
    size: '',
    mesh: ''
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

const threeHandler = new ThreeHandler();