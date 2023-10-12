/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif", "system-ui", "ui-sans-serif"],
        serif: ["Playfair Display", "Georgia", "ui-serif", "serif"],
      },
      colors: {
        primary: "#003d35",
        secondary: "#d2de32",
        dark: "#1b1e21",
        gray: "#3f4242",
      },
    },
  },
  plugins: [],
};
