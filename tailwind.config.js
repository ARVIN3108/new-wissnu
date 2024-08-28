/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        geotricaRegular: ["Geotrica-Regular"],
        geotricaBold: ["Geotrica-Bold"],
        geotricaItalic: ["Geotrica-Italic"],
        geotricaBoldItalic: ["Geotrica-Bold-Italic"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
