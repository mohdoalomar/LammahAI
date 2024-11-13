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
        'LammahBiegeBg': '#E0C4A3',
        'LammahGreen': "#668535"
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

