/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { "Noto-sans": ["Noto-sans", "sans-serif"] },
    },
  },
  plugins: [flowbite],
  
};
