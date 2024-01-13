/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        dua: "#7e7ee3"
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

