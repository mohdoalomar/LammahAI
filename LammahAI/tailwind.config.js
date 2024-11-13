/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'LammahBlack': '#000000',
        'LammahBrown': '#6C351A',
        'LammahRed': '#8D030A',
        'LammahBiege': '#E0C4A3',
        'LammahGreen': "#668535",
        'LammmahBG': '#EFE6DA'
      },
      fontFamily: {
        arian: ['Arian', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

