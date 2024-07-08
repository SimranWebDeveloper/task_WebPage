/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        'largeCon': '8rem',
        'mediumCon': '3rem',
        'smallCon': '2rem',
      },
      colors: {
        customRed: '#DB4444',
      },
    },
    fontFamily:{
      pop:['Poppins'] 
    },

    screens: {
      'sm': '480px',


      'md': '700px',


      'lg': '1160px',


      'xl': '1440px',


    },
    
  },
  plugins: [],
}



