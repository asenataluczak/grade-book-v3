/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#083c5e",
      'primary-dark': '#06324b',
      accent: "#661714",
      slate: colors.slate,
      gray: colors.gray,
      white: colors.white,
    },
  },
  plugins: [],
};
