/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '435px'},
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow:{
        'header':'2px 2px 5px #000000015',
      },
      colors: {
        'light-yellow': '#F9F1E7',
        'light-salmon': '#F9F1E7',
        'gray': '#898989',
        'gray-light': '#9F9F9F',
        'silver-gray': '#F4F5F7',
        'caramel': '#B88E2F',
        'green': '#3A5B22',
        'blue': '#816DFA',
        'red-light': '#E97171',
        'tiffany': '#2EC1AC',
      },
      height: {
        'custom': '3.8rem',
      },
      backgroundColor: {
        'transparent': 'transparent',
        'custom-rgba': 'rgba(249, 241, 231, 0.706)',
      },
      backdropBlur: {
        '10px': '10px',
      },
      boxShadow: {
        'custom-shadow': '-10px 0 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
