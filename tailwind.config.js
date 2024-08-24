/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'text': '#f7eee9',
        'background': '#080402',
        'primary': '#b34400',
        'secondary': '#823d12',
        'accent': '#b94f0e',
        'glass' : 'rgba(8, 4, 2, 0.85)',
       },
       fontFamily:{
        'ubuntu': ['Ubuntu','sans-serif'],
        'opensans': ['Open Sans','sans-serif'],
       },
    },
  },
  plugins: [],
}

