const express = require("express");

const app = express();
const port = process.env.PORT || 3001;

const students = ["Ali", "Sara", "Omar", "Lina", "Zain"];

app.get("/", (req, res) => {
  const items = students.map((name) => `<li>${name}</li>`).join("");
  res.send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Student List</title>
</head>
<body>
  <h1>Student List</h1>
  <ul>${items}</ul>
</body>
</html>`);
});

app.listen(port, () => {
  console.log(`Task1 running on http://localhost:${port}`);
});
