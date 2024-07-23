/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'body': "url('/pawel-czerwinski-1CZCGvc_DBQ-unsplash.jpg')",
        'login': "url('/login.jpg')",
        'signup': "url('/singUp.jpg')"
      }
    },
    colors: {

      tranparent: "tranparent",
      gray: "#595c6c",
      white: "white",
      main: "#c1121f",
      secondary: "#fdf0d5",
      buttoncolor: "#003049",
      lightblue: "#669bbc",
      dipred: "#780000",
      lightGray: "#151619",
      black: "#0e0e0f",
      pink: "#e3229e"

    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
}