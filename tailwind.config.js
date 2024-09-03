/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "orange-dark": "#CA502B",
          orange: "#E17D35",
          "pink-dark": "#C97B6E",
          beige: "#EEC375",
          white: "#E7E9DB",
        },
      },
    },
    fontFamily: {
      Inter: ["'Inter', sans-serif"],
    },
    container: {
      center: true,
      screens: {
        lg: "1536px",
        xl: "1536px",
        "2xl": "2500px",
      },
    },
  },
  plugins: [],
};
