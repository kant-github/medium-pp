/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#000000',
        customMid: '#EEEEEE',
        customLight: '#76ABAE',
        customBlue: '#305F72'
      },
    },
  },
  plugins: [],
}
