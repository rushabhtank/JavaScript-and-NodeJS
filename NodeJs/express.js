/** @format */

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  const id = req.query.id;
  res.send("Hello World ExpressJS" + id);
});

app.get("/car", function (req, res) {
  res.send("Honda ,TATA   ,Wokswegen");
});

app.get("/car/:id", function (req, res) {
  const id = req.query.id;
  if (id == 1) {
    res.send("Honda City");
  } else if (id == 2) {
    res.send("Tata Altroz");
  } else if (id == 3) {
    res.send("Wokswegen Vento");
     } else {
    res.send("Wrong Id....");
  }
});

app.listen(2008, function (req, res) {
  console.log("Server running");
});
