/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
    },
    extend: {
      screens: {
        'xs': {'max': '600px'}
      },
      fontFamily: {
        'primary': ['Kreon'],
        'secondary': ['Arvo'],
        'tertiary': ['Salsa'],
        'tertiary1': ['Grandstander'],
        'tertiary2': ['Marmelad'],
      }
    },
  },
  plugins: [],
}

