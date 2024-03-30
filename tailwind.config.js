/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#930b31",
        secondary: "#fad502",
        "accent-light": "#f6efe8",
        "accent-blue": "#337ab7",
        "accent-red": "#b31642",
        "accent-green": "#02a64f",
        "dark-red": "#750e27",
        "text-light": "#444444",
        "text-dark": "#333333",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
