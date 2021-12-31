module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "soft-blue-primary": "hsl(215, 51%, 70%)",
        "cyan-primary": "hsl(178, 100%, 50%)",
        "dark-blue-main" : "hsl(217, 54%, 11%)",
        "dark-blue-card" : "hsl(216, 50%, 16%)",
        "dark-blue-line" : "hsl(215, 32%, 27%)"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
