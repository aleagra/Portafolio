/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        '3xl': '1900px',
      },
      fontFamily: {
        jakarta: ['jakarta', 'sans'],
      }, 
      colors: {
      
      },
    },
  },
  plugins: [],
};
