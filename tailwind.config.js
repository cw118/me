/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#040e16",
        secondary: "#5ea1a1",
        tertiary: "#16384d",
        "black-100": "#0f2038",
        "black-200": "#0b1728",
        "white-100": "#cceff1",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1e3048",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/heroBg.png')",
      },
    },
  },
  plugins: [],
};