/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        "ink-soft": "var(--color-ink-soft)",
        sand: "var(--color-sand)",
        cream: "var(--color-cream)",
        accent: "var(--color-accent)",
        "accent-dark": "var(--color-accent-dark)",
        olive: "var(--color-olive)"
      },
      boxShadow: {
        card: "0 20px 50px rgba(28, 18, 12, 0.14)",
        soft: "0 12px 24px rgba(28, 18, 12, 0.12)"
      }
    }
  },
  plugins: []
};
