const colors = require('./src/theme/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    fontFamily: {
      inter: ['Inter'],
    },
    extend: {
      colors,
    },
  },
  plugins: [],
};
