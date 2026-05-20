const path = require("path");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;
const NEWS_API_KEY = process.env.NEWS_API_KEY;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/news/:country", async (req, res) => {
  const country = (req.params.country || "").trim().toLowerCase();

  if (!country || !/^[a-z]{2}$/.test(country)) {
    return res.status(400).json({ error: "Country code must be a two-letter code." });
  }

  if (!NEWS_API_KEY) {
    return res.status(500).json({ error: "News API key is not configured." });
  }

  try {
    const url = `https://newsapi.org/v2/top-headlines?country=${encodeURIComponent(
      country
    )}&pageSize=8&apiKey=${NEWS_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json().catch(() => ({}));

    if (!response.ok || data.status !== "ok") {
      const message = data && data.message ? data.message : "News API request failed.";
      return res.status(502).json({ error: message });
    }

    const articles = Array.isArray(data.articles) ? data.articles.slice(0, 8) : [];
    const trimmed = articles
      .filter((article) => article && article.title && article.url)
      .map((article) => ({
        title: article.title,
        source: article.source && article.source.name ? article.source.name : "Unknown",
        url: article.url,
        publishedAt: article.publishedAt
      }));

    return res.json({
      country,
      count: trimmed.length,
      articles: trimmed
    });
  } catch (error) {
    return res.status(502).json({ error: "Unable to reach news service." });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

app.listen(PORT, () => {
  console.log(`News API server running on http://localhost:${PORT}`);
});
