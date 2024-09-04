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
          "beige-transparent": "rgba(238, 195, 117, 0.5)",
          white: "#E7E9DB",
        },
      },
      height: {
        "intro-section": "100vh",
      },
    },
    fontFamily: {
      Inter: ["'Inter', sans-serif"],
      Gloock: ["'Gloock', serif"],
    },
    container: {
      center: true,
      screens: {
        lg: "2500px",
        xl: "2500px",
        "2xl": "2500px",
      },
    },
  },
  plugins: [],
};
