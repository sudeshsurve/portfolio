/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'400px',
      md:'768px',
      lg :"976px",
      xl:'1440px'
  
  },
    extend: {
      colors:{
    brightred:'hsl(12 , 80%"  , 59%)'

    
      }
    },
  },
  plugins: [],  
}
