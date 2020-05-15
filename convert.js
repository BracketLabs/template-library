const baseCsvPath = "./csv";
const baseJsonPath = "./json";
const fs = require("fs");
var Papa = require("papaparse");
fs.readdir(baseCsvPath, function (err, items) {
  for (let item of items) {
    const data = fs.readFileSync(baseCsvPath + "/" + item, "utf8");
    fs.writeFileSync(
      baseJsonPath + "/" + item.replace(".csv", ".json"),
      JSON.stringify(
        Papa.parse(data, { header: true, skipEmptyLines: true }).data
      )
    );
  }
});
