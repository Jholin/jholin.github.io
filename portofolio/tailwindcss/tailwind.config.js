/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {               
      fontFamily: {
        inter : ['Inter', 'sans-serif'],
      },
      spacing : {
        '140' : '35rem',
        '212' : '48rem',
        '180' : '45rem'
      },
      colors : {
        'heading' : '#2D2E2E',
        'button' : '#3A4F49',
        'input' : '#ABABAB',
        'forms' : '#F6F6F6',
        'background' : '#FFF',
        'green-bg' : '#EFF6F3',
        'yellow-wb' : '#F8D254',
        'green-wb' : '#A0CD9E',
      },
    },
  },
  plugins: [],
}

