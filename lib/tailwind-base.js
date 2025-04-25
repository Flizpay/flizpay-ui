/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        primary: "#57cc99",
        secondary: "#22577a",
        tertiary: "#80ed99",
        error: "#ff9898",
        success: "#c7f9cc",

        "gray-450": "#adadad",

        "midnight-blue-80": "#7294aa",
        "midnight-blue-60": "#7a9aaf",
        "midnight-blue-40": "#a7bcca",
        "midnight-blue-20": "#d3dde4",

        "turquoise-blue-60": "#38a3a5",

        "navy-blue": "#001f3f",
        "blue-80": "#16384e",
        "blue-60": "#143449",
        "blue-40": "#0e2331",
        "blue-20": "#071118",

        "green-80": "#79d6ad",
        "green-60": "#9ae0c2",
        "green-40": "#bcebd6",
        "green-20": "#ddf5eb",

        "pale-mint": "#c7f9cc",
        "mint-80": "#d2fad6",
        "mint-60": "#ddfbe0",
        "mint-40": "#e9fdeb",
        "mint-20": "#f4fef5",

        "neon-80": "#99f1ad",
        "neon-60": "#b3f4c2",
        "neon-40": "#ccf8d6",
        "neon-20": "#e6fbeb",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out both",
        "accordion-up": "accordion-up   0.25s ease-out both",
      },
    },
  },
};
