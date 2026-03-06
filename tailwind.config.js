/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        foreground: "#ededed",
        accent: "#2175a1",
        "accent-hover": "#1a6088",
        muted: "rgba(255, 255, 255, 0.5)",
        "muted-light": "rgba(255, 255, 255, 0.35)",
        border: "rgba(255, 255, 255, 0.12)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        body: ["18px", { lineHeight: "1.7" }],
        "body-mobile": ["16px", { lineHeight: "1.7" }],
        headline: ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-mobile": ["28px", { lineHeight: "1.2", fontWeight: "700" }],
        subheadline: ["24px", { lineHeight: "1.3", fontWeight: "600" }],
      },
      maxWidth: {
        letter: "680px",
      },
      spacing: {
        section: "60px",
        "section-mobile": "40px",
      },
    },
  },
  plugins: [],
};
