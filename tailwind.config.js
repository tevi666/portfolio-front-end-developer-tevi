/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transition: {
        'transition': 'transition: all 2s ease-in-out',
      }
    },
  },
  plugins: [],
}
