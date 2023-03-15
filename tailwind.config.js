/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slider: {
          "35%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-1000px)" },
          "85%": { transform: "translateX(-1000px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        slider: "slider 24s ease-out infinite",
      },
    },
  },
  plugins: [],
};
