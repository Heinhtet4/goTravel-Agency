/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'text': '#180f09',
        'background': '#fdf9f7',
        'primary': '#ff914d',
        'secondary': '#eda77c',
        'accent': '#f18848',
       },
       fontFamily:{
        'ubuntu': ['Ubuntu','sans-serif'],
        'opensans': ['Open Sans','sans-serif'],
       },
    },
  },
  plugins: [],
}

