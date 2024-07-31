const { BiFontFamily } = require("react-icons/bi");

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        'teko': ['Teko', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
