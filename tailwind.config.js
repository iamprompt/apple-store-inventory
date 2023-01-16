/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['SF Pro TH', 'SF Pro Text', 'sans-serif'],
      heading: ['SF Pro TH', 'SF Pro Display', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

module.exports = config
