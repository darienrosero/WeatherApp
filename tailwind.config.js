/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'grey-blue': '#1e213a',
        'dark-blue': '#100e1d',
        'light-blue': '#3c47e9',
        'grey-R': '#6e707a',
        'grey-L': '#a09fb1',
        'grey-F': '#585676',
        'light-yeloow': '#ffec65',
        'white-R': '#e7e7eb',
        'skyBlue': '#3c47e9'
      },
      fontFamily:{
         "Raleway": [ 'Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}

