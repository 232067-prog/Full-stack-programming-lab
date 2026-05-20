const form = document.getElementById("news-form");
const input = document.getElementById("country-input");
const result = document.getElementById("news-result");

const renderMessage = (message, tone) => {
  const safeTone = tone || "muted";
  result.innerHTML = `<p class="${safeTone}">${message}</p>`;
};

const formatDate = (value) => {
  if (!value) {
    return "Unknown date";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Unknown date";
  }
  return date.toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const code = input.value.trim().toLowerCase();

  if (!/^[a-z]{2}$/.test(code)) {
    renderMessage("Please enter a two-letter country code.", "error");
    return;
  }

  renderMessage("Loading top headlines...", "muted");

  try {
    const response = await fetch(`/api/news/${encodeURIComponent(code)}`);
    const data = await response.json();

    if (!response.ok) {
      renderMessage(data.error || "Unable to fetch headlines.", "error");
      return;
    }

    const articles = Array.isArray(data.articles) ? data.articles : [];
    if (articles.length === 0) {
      renderMessage("No headlines found for that country.", "muted");
      return;
    }

    const items = articles
      .map((article) => {
        const title = article.title || "Untitled story";
        const source = article.source || "Unknown source";
        const date = formatDate(article.publishedAt);

        return `
          <li class="news-item">
            <a href="${article.url}" target="_blank" rel="noopener noreferrer">${title}</a>
            <div class="meta">${source} - ${date}</div>
          </li>
        `;
      })
      .join("");

    result.innerHTML = `<ul class="news-list">${items}</ul>`;
  } catch (error) {
    renderMessage("Unable to reach the news service right now.", "error");
  }
});
