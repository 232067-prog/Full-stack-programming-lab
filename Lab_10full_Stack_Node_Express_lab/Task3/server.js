const express = require("express");

const app = express();
const port = process.env.PORT || 3003;

app.get("/user/:name", (req, res) => {
  const name = req.params.name;
  res.send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>User Page</title>
</head>
<body>
  <h1>Hello ${name}</h1>
</body>
</html>`);
});

app.get("/", (req, res) => {
  res.send("<h1>Try /user/YourName</h1>");
});

app.listen(port, () => {
  console.log(`Task3 running on http://localhost:${port}`);
});
