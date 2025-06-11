/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['"Montserrat Alternates"', 'sans-serif'],
        savate: ['Savate', 'serif'],
      },
    },
  },
  plugins: [],
};