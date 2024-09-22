/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        loreda: ["Loreda", "sans-serif"],
        maisonNeue_bold: ["MaisonNeue-Bold", "sans-serif"],
        maisonNeue_light: ["MaisonNeue-Light", "sans-serif"],
        maisonNeue_medium: ["MaisonNeue-Medium", "sans-serif"]
      }
    },
  },
  plugins: [],
}