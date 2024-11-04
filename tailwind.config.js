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
          "beige-transparent": "rgba(238, 195, 117, 0.8)",
          white: "#E7E9DB",
          "leaf-green": "#436436",
        },
      },
      screens: {
        "3xl": "3000px",
      },
      borderRadius: {
        large: "192px",
      },
      maxWidth: {
        "card-width": "64rem",
      },
      minHeight: {
        "profile-image": "695px",
      },
      maxHeight: {
        "profile-text": "680px",
        "card-details-height": "900px",
      },
    },
    fontFamily: {
      Inter: ["'Inter', sans-serif"],
      Merriweather: ["'Merriweather', serif"],
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
