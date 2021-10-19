module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "mw-2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "mw-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "mw-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "mw-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "mw-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  variants: {},
  plugins: [],
};
