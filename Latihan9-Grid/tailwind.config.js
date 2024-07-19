/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      aspectRatio: {
      '4/3': '4 / 3',
    }
  },
  },
  plugins: [],
}

