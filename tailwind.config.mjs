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
        heading: ["'Cormorant Garamond'", "serif"],
        body: ["'Libre Baskerville'", "serif"],
        ui: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
