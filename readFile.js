/** @format */

var fs = require("fs");

fs.readFile("arrays.js", "utf-8", function (err, result) {
  console.log(result);
});

setTimeout(function () {
  const readTest = fs.readFileSync("func.js", "utf8");
  console.log(readTest);
}, 5000);
