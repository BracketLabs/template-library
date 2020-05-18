const baseCsvPath = "./csv";
const baseJsonPath = "./json";
const fs = require("fs");
var Papa = require("papaparse");
fs.readdir(baseCsvPath, function (err, folders) {
  for (let folder of folders) {
    if (folder === ".DS_Store") continue;
    const dirname = baseJsonPath + "/" + folder;
    if (!fs.existsSync(dirname)) fs.mkdirSync(dirname);
    fs.readdir(baseCsvPath + "/" + folder, function (err, items) {
      for (let item of items) {
        if (item === ".DS_Store") continue;
        const data = fs.readFileSync(
          baseCsvPath + "/" + folder + "/" + item,
          "utf8"
        );
        fs.writeFileSync(
          dirname + "/" + item.replace(".csv", ".json"),
          JSON.stringify(
            Papa.parse(data, { header: true, skipEmptyLines: true }).data
          )
        );
      }
    });
  }
});
