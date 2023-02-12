/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "0px",
        // => @media (min-width: 0px) { ... }

        laptop: "720px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        'primary': '#e01c2c',
        'secondary': '#FF655D'
      }
    },
  },
  plugins: [],
};
