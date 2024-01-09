/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const zeeroMax = '120rem'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./routes/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    '!bg-transparent',
    'opacity-0', //Saved for use as fade affect on home page slider
 ],
  theme: {
    fontFamily: {
      'zeero' : ['poppins', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      ...defaultTheme.screens,
      'zeero-max' : zeeroMax
    },
    extend: {
      maxWidth: {
        'zeero' : zeeroMax
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
      zIndex: {
        '1' : '1'
      }
    },
    colors: {
      ...colors,
      'zeero-primary' : '#383736',
      'zeero-on-primary' : 'white',
      'zeero-on-primary-1' : '#8c9481'
    },
  },
  plugins: [],
}