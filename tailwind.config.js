/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.jsx",
    "./src/components/*/*.jsx",
    "./src/pages/**/*.jsx",
    "./src/assets/layouts/**/*.jsx",
    './src/*.{jsx, js}',
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
