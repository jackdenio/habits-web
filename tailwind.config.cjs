/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        background: '#010304',
        yellow1: '#e47200',
        yellow2: '#e69b00',
        yellow3: '#e6b400',
        yellow4: '#e6cc00',
        yellow5: '#e5de00',
      },

      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      },
      
    },
  },
  plugins: [],
}
