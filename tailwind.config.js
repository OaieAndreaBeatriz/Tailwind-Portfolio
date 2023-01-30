/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/components/About.js',
    './src/components/Contact.js',
    './src/components/Home.js',
    './src/components/NavBar.js',
    './src/components/Projects.js',
    './src/components/Skills.js',
    './src/App.js'
  ],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
