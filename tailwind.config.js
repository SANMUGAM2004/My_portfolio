/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#222222",
        "secoundary": "#FFEF5E",
        "tertiary": "#93FF3F",
      }
    },
    screens: {
      sm: {max:'1000px'},

      lg: {max:'2023px'},
    }
  },
  plugins: [],
}
//#93FF3F