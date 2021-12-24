module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(207, 26%, 17%)",
        "bit-dark-blue": "hsl(200, 15%, 8%)",
        "dark-gray": "hsl(0, 0%, 52%)",
      },
    },
  },
  plugins: [],
};
