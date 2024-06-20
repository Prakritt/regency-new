/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      cursive: ["Cursive", "sans-serif"],
      logo: ["Logo", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
});
