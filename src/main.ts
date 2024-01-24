import { parse } from 'csv-parse/browser/esm/sync';
import {ThreeHandler} from "./ThreeHandler.ts";
import GUI from "lil-gui";

let csv: Array<Array<string>>;
const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
fileUpload.addEventListener('change', async () => {
    const file = fileUpload.files.item(0);
    if (!file) return;
    csv = await parse(await file.text());
    await threeHandler.createScene(csv);
});

const gui = new GUI();

const parameters = {
    maxVariation: 0.2,
    basicSize: 0.1
}

gui.add(parameters, 'maxVariation').min(0.1).max(1).onChange((value: number) => {
    threeHandler.setMaxVariation(value);
})

gui.add(parameters, 'basicSize').min(0.01).max(1).onChange((value: number) => {
    threeHandler.setBasicSize(value);
})

const threeHandler = new ThreeHandler();