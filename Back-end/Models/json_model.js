import { readFileSync } from "fs";

export{
    readFileJson
}

const readFileJson = (file) => {return JSON.parse(readFileSync("Uploads/"+file + ".json"))};

