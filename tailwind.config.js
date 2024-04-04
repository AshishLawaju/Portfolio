/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {},

      colors: {
        primary: "#D3D3D3",
        "primary-light": "#8a8fb9",
        "primary-dark": "#0d0e43",
        secondary: "#fb2e86",
        "primary-light-10": "#F6F5ff",

        background: "#0c0c1d",
      },
    },
    fontFamily: {
      DMSans: ["DM Sans", "sans-serif"],
      JosefinSans: ["Josefin Sans", "sans-serif"],
      Lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
