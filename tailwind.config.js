import daisyui from "daisyui";
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ce1212",
        secondary: "#004225",
        gray: "#555555",
      },
      fontFamily: {
        manrope: "'Manrope', sans-serif",
        inter: "'Inter',sans-serif",
        fjalla: "'Fjalla One','sans-serif'",
        mulish: "'Mulish', sans-serif",
      },
    },
  },
  darkMode: "class",
  plugins: [daisyui,nextui()],
  daisyui: {
    themes: ["light"],
  },
};
