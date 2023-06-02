const express = require("express");
const app = express();
const path = require("path");
const data = require("./data.json");
console.log(data);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/random", (req, res) => {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  res.render("random", { randomNum });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  console.log(subreddit);
  const subInfo = data[subreddit];

  res.render("subreddit", { ...subInfo });
});

app.get("/colours", (req, res) => {
  const colours = ["blue", "red", "oragne", "yellow", "black"];
  res.render("colours", { colours });
});
