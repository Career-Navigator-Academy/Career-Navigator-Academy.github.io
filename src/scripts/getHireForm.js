const { googleFormsToJson } = require("react-google-forms-hooks");
const fs = require("fs");
const path = require("path");

const saveJsonToFile = (filename, json) => {
  const filePath = path.resolve(__dirname, filename);
  fs.writeFile(filePath, JSON.stringify(json), "utf8", function (err) {
    if (err) throw err;
  });
};

const run = async () => {
  const result = await googleFormsToJson(
    "https://docs.google.com/forms/d/e/1FAIpQLScKc73sSUiIes69h5CAn_VDf_UUM4oX1BFR_JYC4mnJsOwBqQ/viewform"
  );
  saveJsonToFile("hire_form.json", result);
  console.log("Done!");
};
run();
