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
        primary: {
          "100": "#F5EEE4",
          "200": "#EBDDCA",
          "300": "#C3B09B",
          "400": "#887565",
          "500": "#3A2E26",
          "600": "#31231B",
          "700": "#291913",
          "800": "#21100C",
          "900": "#1B0A07",
        }
      }
    },
  },
  plugins: [],
}