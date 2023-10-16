/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {

    extend: {},
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        'html': { fontSize: '18px' }
      })
    })
  ],
}

