/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c1c",
        secondary: "#232323",
        tertiary: "#2b6a4f",
      }

    },
  },
  plugins: [],
}