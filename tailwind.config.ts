/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "black-100": "#31333b",
        "black-200": "#443e3c",
        "gold-200": "#f0bf6c"
      },
      fontFamily: {
        'body': ['Open Sans']
      },
      screens : {
        '2xl' : '1550px'
      }
    },
    container: {
      center: true,
      padding: {
        "2xl" : '6rem',
        xl: '4rem',
        md : '3rem',
        sm : '2rem',
        default : '1rem'

      },
    }
  },
  plugins: [
  ]
}
