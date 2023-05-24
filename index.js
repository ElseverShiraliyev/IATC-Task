const express = require("express");
const app = express();
const fs = require("fs");
const data1 = fs.readFileSync("./index.html", "utf-8");

var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000,
};
var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200,
};
var darthFarFar = {
  name: "Darth Far Far Wittles",
  role: "Sith Lord",
  age: 5,
  forcePoints: 1000000,
};

app.get("/", async function (req, res) {
  res.end(data1);
});
app.get("/yoda", async function (req, res) {
  res.json(yoda);
});

app.get("/darthmaul", async function (req, res) {
  res.json(darthmaul);
});
app.get("/farfar", async function (req, res) {
  res.json(darthFarFar);
});

app.listen(7890, "0.0.0.0", async function () {
  console.log("Server işləyir.");
});
