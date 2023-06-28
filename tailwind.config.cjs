/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        '3xl': '1900px', // Agrega la pantalla 2xl con un ancho mínimo de 1650px
      },
      colors: {
      
      },
    },
  },
  plugins: [],
};
