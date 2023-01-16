/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'lg': {'max': '950px'},
      'md': {'max': '768px'},
      'sm': {'max': '620px'}
    },
    container: {
      padding: '20px',
      center: true
    },
    boxShadow: {
      'cardShadow': '0px 13px 19px rgba(0, 0, 0, 0.07)'
    },
    extend: {},
  },
  plugins: [],
}
