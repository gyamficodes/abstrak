/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        'primary-font': ['Poppins','sans-seri'],
        'secondry-font': ['DM Sans', 'sans-seri']
      },
      colors: {
        'abstrak-PaleBlue': '#ecf2f6',
        'abstrak-black' : '#27272e',
        'abtrak-gradient':'#ecf2f6',
        'abstrak-gradient-hover': '#f8f8f8',
        'abstrak-blue': '#5956e9',
        'abstrak-black-text': '#292930',
        'abstrak-gray':'#99a1aa',
        'abstrak-banner':'rgba(41, 41, 48, 0.8)',
        'moon': '#5956e9',
        'abtrack-dient':'#2F2F35',
        'btn': '#2522ba',
        'btnB': '#0d6efd',
      },
      animation:{
        'back-in-up': 'backInUp 1s 1'
      },
      keyframes: {
        backInUp: {
          "0%": { transform: "translateY(1200px) scale(0.7)", opacity: 0.7 },
          "80%": { transform: "translateY(0px) scale(0.7)", opacity: 0.7 },
          "100%": { transform: "scale(1)", opacity: 1 }
        }
      }

    },
  },
  plugins: [],
}

