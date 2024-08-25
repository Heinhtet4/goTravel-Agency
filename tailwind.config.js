/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'text': '#f7eee9',
        'background': '#080402',
        'primary': '#FF8225',
        'secondary': '#f3ab74',
        'accent': '#b94f0e',
        'glass' : 'rgba(8, 4, 2, 0.85)',
        'glass-light': 'rgba(8, 4, 2, 0.6)',
       },
       fontFamily:{
        'ubuntu': ['Ubuntu','sans-serif'],
        'opensans': ['Open Sans','sans-serif'],
       },
    },
  },
  plugins: [],
}

