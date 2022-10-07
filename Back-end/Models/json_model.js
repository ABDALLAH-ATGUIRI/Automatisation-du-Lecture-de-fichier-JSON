import { readFileSync } from "fs";

// Read JSON file
const loadJson = (file) => JSON.parse(readFileSync(file + ".json"));
