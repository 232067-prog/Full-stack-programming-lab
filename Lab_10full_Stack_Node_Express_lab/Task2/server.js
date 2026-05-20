const express = require("express");

const app = express();
const port = process.env.PORT || 3002;

app.get("/home", (req, res) => {
  res.send("<h1>Welcome Home</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
});

app.get("/", (req, res) => {
  res.send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Message Routes</title>
</head>
<body>
  <h1>Message Routes</h1>
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</body>
</html>`);
});

app.listen(port, () => {
  console.log(`Task2 running on http://localhost:${port}`);
});
