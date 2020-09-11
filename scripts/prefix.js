const fs = require("fs");
const {resolve} = require("path");

const path = resolve("dist/index.js");

fs.writeFileSync(
  path, 
  `
const JSBI = require("jsbi");

${fs.readFileSync(path, "utf-8")}
  `.trim(),
);
