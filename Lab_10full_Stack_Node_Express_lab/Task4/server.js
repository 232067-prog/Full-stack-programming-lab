const express = require("express");

const app = express();
const port = process.env.PORT || 3004;

app.get("/", (req, res) => {
  res.send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Simple HTML Page</title>
</head>
<body>
  <h1>Simple HTML Page</h1>
  <p>This page is rendered directly from an Express route.</p>
  <ul>
    <li>Fast</li>
    <li>Simple</li>
    <li>Express</li>
  </ul>
</body>
</html>`);
});

app.listen(port, () => {
  console.log(`Task4 running on http://localhost:${port}`);
});
