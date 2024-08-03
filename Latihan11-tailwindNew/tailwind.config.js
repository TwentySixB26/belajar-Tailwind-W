/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        hijau :'#BADA55', 
        tema : 'rgb(var(--warna-tema)/ <alpha-value> )'
      }
    },
  },
  plugins: [],
}

