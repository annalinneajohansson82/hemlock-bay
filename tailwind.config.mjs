/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.astro"],
  theme: {
    extend: {
      colors: {
        warmblack: "#1b1714",
        antiqueGold: "#b08a3c",
      },
      fontFamily: {
        sans: ["'Source Sans 3'", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["'Source Serif 4'", "ui-serif", "Georgia", "serif"],
      },
      fontSize: {
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["1.125rem", { lineHeight: "1.6" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
      },
      letterSpacing: {
        tight: "-0.01em",
      },
    },
  },
  plugins: [],
};
