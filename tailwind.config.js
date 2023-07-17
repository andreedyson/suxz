/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-purple': '#8C82FC',
        'button-aqua': '#44E4C9'
      },
      backgroundImage: {
        'waiting': "url('/src/img/waiting.png')"
      }
    },
  },
  plugins: [],
}

