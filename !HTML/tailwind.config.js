/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'xl':{'max':'1200px'},
      'lg':{'max':'1024px'},
      'md':{'max':'768px'},
      'sm':{'max':'480px'},
    },
    container:{
      padding:'47px',
      center:true
    },
    extend: {
      colors:{
        lightgrey:'#F8F7F3',
        midgrey:'#938E84',
        red:'#E02B12',
        black:'#1D130E',
        yellow:'#FFC738'
      }
    },
  },
  plugins: [],
}