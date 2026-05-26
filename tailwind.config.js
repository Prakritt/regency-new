/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      cursive: ["Cursive", "sans-serif"],
      logo: ["Logo", "sans-serif"],
    },
    extend: {
      colors: {
        emerald: colors.emerald,
        zinc: colors.zinc,
        gray: {
          950: colors.gray[950],
        },
      },
    },
  },
  plugins: [],
});
