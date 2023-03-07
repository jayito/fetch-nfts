module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'green': '#03A3CD',
        'blue': '#03A8D4',
        'pink': '#eb5d4f',
        'yellow': '#FFCC00',
        'gray': '#9CA3AF',
        'black': {
          'light': '#242435',
          'medium': '#13131d'
        }
      },
      fontSize: {
        '9xl': '7rem',
        '10xl': '9rem',
        '11xl': '11rem',
      }
    },
  },
  plugins: [],
}