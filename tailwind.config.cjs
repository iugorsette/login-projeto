/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter , sans-serif'
      },
      colors: {
        newBlue: {
          700: '#033277',
        }
        ,
        newGray: {
          900: '#050712',
          800: '#202024',
          400: '#7c7c8a',
          200: '#c4c4cc',
          100: '#e1e1e6',
        },

        newRed: {
          200: '#985151',
        }
      }
    },
  },
  plugins: [],

}
