const path = require("path");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/weather/:city", async (req, res) => {
  const city = (req.params.city || "").trim();

  if (!city) {
    return res.status(400).json({ error: "City is required." });
  }

  if (!WEATHER_API_KEY) {
    return res.status(500).json({ error: "Weather API key is not configured." });
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&units=metric&appid=${WEATHER_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const message = errorData && errorData.message ? errorData.message : "Weather API request failed.";
      const status = response.status === 404 ? 404 : 502;
      return res.status(status).json({ error: message });
    }

    const data = await response.json();
    const payload = {
      city: data.name,
      temperatureC:
        data.main && typeof data.main.temp === "number"
          ? Math.round(data.main.temp * 10) / 10
          : null,
      condition: data.weather && data.weather[0] ? data.weather[0].main : "Unknown",
      humidity: data.main && typeof data.main.humidity === "number" ? data.main.humidity : null
    };

    return res.json(payload);
  } catch (error) {
    return res.status(502).json({ error: "Unable to reach weather service." });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

app.listen(PORT, () => {
  console.log(`Weather API server running on http://localhost:${PORT}`);
});
