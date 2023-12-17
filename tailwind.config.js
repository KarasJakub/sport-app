/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Inter", "sans-serif"],
    },
    colors: {
      white: "#fff",
      black: "#000",
      lightGray: "#FAFAFA",
      darkGray: "#EAEBED",
      borderGray: "#D5E0E8",
      blue: "#1C336C",
      orange: "#FC5C17",
      extend: {},
    },
    plugins: [],
  },
}
