/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0c0f",
        gold: "#c6a85a",
        parchment: "#e8e3d7",
      },
      fontFamily: {
        display: ["IM Fell English SC", "ui-serif", "Georgia", "Times New Roman", "serif"],
        serif: ["Cormorant", "ui-serif", "Georgia", "Times New Roman", "serif"],
        sans: ["Source Sans 3", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
        accent: ["IM Fell English SC", "ui-serif", "Georgia", "Times New Roman", "serif"],
      },
      letterSpacing: {
        hbWide: "0.06em",
        hbWider: "0.10em",
      },
      lineHeight: {
        hbBody: "1.65",
        hbTight: "1.05",
      },
    },
  },
  plugins: [],
};
