/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  theme: {
    fontSize: {
      xsm: '0.6rem',
    },
    extend: {
      colors: {
        'tail-blue': '#0F4C5C',
        'orangish': '#E36414'
      },

      spacing: {
        'ten': '11rem',
      },

      transitionProperty: {
        'border': 'border-2',
        
      },

      animation: {
        'spin-five': 'bounce 2s ease-in 1',
      }
    },

    listStyleType: {
      tick: 'square',
    },

    fontFamily: {
      'comforter-brush': ['Comforter Brush', 'cursive'],
      'roboto': ['Roboto', 'sans-serif']
    },
  },
  plugins: [],
}
