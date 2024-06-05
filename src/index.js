const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Routes
app.get("/", (req, res) => {
  // return res.send(`<h1 style="color:red;">Hello World!</h1>`);
  res.render("home");
});

app.get("/news", (req, res) => {
  console.log("query: ", req.query.q);
  res.render("news");
});

app.get("/search", (req, res) => {
  // console.log("query: ", req.query.q);
  // http://localhost:3000/search?q=f8%20lap%20trinh&ref=mycv&author=sondn
  res.render("search");
});

// 127.0.0.1 ~ localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
