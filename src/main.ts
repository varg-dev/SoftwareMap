import { parse } from 'csv-parse/browser/esm/sync';
import {ThreeHandler} from "./ThreeHandler.ts";

let csv: Array<Array<string>>;
const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
fileUpload.addEventListener('change', async () => {
    if (!fileUpload.files) return;
    csv = await parse(await fileUpload.files[0].text());
    threeHandler.createScene(csv);
    console.log(csv);
});

const threeHandler = new ThreeHandler();