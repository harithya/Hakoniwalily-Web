/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Balthazar"', 'serif'],
        'japanese': ['"Zen Maru Gothic"', 'sans-serif'],

      },
      colors: {
        primary: "#3a2e26"
      }
    },
  },
  plugins: [],
}