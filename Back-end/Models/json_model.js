import { readFileSync } from "fs";

const loadJson = (file) => JSON.parse(readFileSync(file + ".json"));
