/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.jsx',
    './src/components/*/*.jsx',
    './src/pages/**/*.jsx',
    './src/assets/layouts/**/*.jsx',
    './src/*.{jsx, js}',
    './public/index.html',
  ],
  theme: {
    screens: {
      'phone': {'max': '639px'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}
