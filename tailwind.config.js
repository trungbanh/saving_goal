const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: '#1B31A8',
      secondary: '#0079FF',
      'blue-gray': {
        50: '#E9EEF2',
        400: '#708797',
        600: '#4D6475',
        900: '#1E2A32'
      },
      'neutral-white': '#FFFFFF'
    }
  },
  plugins: []
}
