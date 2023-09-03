/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "translateX(70%)" },
          "50%": { transform: "translateX(35%)" },
          "100%": { transform: "translateX(0)" },
        },
        antiwave: {
          "0%": { transform: "translateX(-70%)" },
          "50%": { transform: "translateX(-35%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeintext: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0.3 },
          "100%": { opacity: 1 },
        },
        swaggyone: {
          "0%": { transform: "translateY(70%)" },
          "50%": { transform: "translateY(35%)" },
          "100%": { transform: "translateY(0)" },
        },
        clockeffect: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1.4)" },
        },
      },
      animation: {
        "reveal-text": "wave 2s linear",
        "reveal-antitext": "antiwave 2000ms ease-in-out",
        "reveal-fadertext": "fadeintext 4s linear ",
        "drop-swaggy": "swaggyone 2s ease-in",
        "clock-play": "fadeintext 1010ms ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
