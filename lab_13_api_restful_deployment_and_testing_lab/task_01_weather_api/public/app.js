const form = document.getElementById("weather-form");
const input = document.getElementById("city-input");
const result = document.getElementById("weather-result");

const renderMessage = (message, tone) => {
  const safeTone = tone || "muted";
  result.innerHTML = `<p class="${safeTone}">${message}</p>`;
};

const formatValue = (value, suffix) => {
  if (value === null || value === undefined || value === "") {
    return "Unavailable";
  }
  return suffix ? `${value} ${suffix}` : `${value}`;
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = input.value.trim();

  if (!city) {
    renderMessage("Please enter a city name.", "error");
    return;
  }

  renderMessage("Loading current weather...", "muted");

  try {
    const response = await fetch(`/api/weather/${encodeURIComponent(city)}`);
    const data = await response.json();

    if (!response.ok) {
      renderMessage(data.error || "Unable to fetch weather.", "error");
      return;
    }

    const temp = formatValue(data.temperatureC, "C");
    const humidity = formatValue(data.humidity, "percent");
    const condition = formatValue(data.condition);
    const cityName = formatValue(data.city);

    result.innerHTML = `
      <div class="stat-grid">
        <div class="stat">
          <span class="label">City</span>
          <span class="value">${cityName}</span>
        </div>
        <div class="stat">
          <span class="label">Temperature</span>
          <span class="value">${temp}</span>
        </div>
        <div class="stat">
          <span class="label">Condition</span>
          <span class="value">${condition}</span>
        </div>
        <div class="stat">
          <span class="label">Humidity</span>
          <span class="value">${humidity}</span>
        </div>
      </div>
    `;
  } catch (error) {
    renderMessage("Unable to reach the weather service right now.", "error");
  }
});
