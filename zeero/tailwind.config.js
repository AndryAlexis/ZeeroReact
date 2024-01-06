/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./routes/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'zeero' : '120rem'
      },
      padding: {
        'zeero' : '4vw',
        'initial' : 'initial'
      },
      width: {
        'inherit' : 'inherit'
      },
      minWidth: {
        'inherit' : 'inherit'
      },
      height: {
        'inherit' : 'inherit'
      },
    },
    colors: {
      ...colors,
      'zeero-primary' : 'black',
      'zeero-on-primary' : 'white'
    },
  },
  plugins: [],
}