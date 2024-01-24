import { parse } from 'csv-parse/browser/esm/sync';
import {ThreeHandler} from "./ThreeHandler.ts";

let csv: Array<Array<string>>;
const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
fileUpload.addEventListener('change', async () => {
    const file = fileUpload.files.item(0);
    if (!file) return;
    csv = await parse(await file.text());
    await threeHandler.createScene(csv);
});

const threeHandler = new ThreeHandler();