/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/App.js'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
