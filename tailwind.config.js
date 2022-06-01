const withAnimations = require("animated-tailwindcss");

module.exports = withAnimations({
  // your (existing) Tailwind CSS config here
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gris: "#262626",
        cream: "#fdba74",
        "red/600": "#dc2626",
        "yellow/300": "#fcd34d",
        "yellow/400": "#fbbf24",
        "green/800": "#065f46",
        warm: "#1C1917",
        Blanc: "#FFFFFF",
        "yellow/500": "F59E0B",
      },

      screens: {
        " ipad_mini": "744px",
        ipad_pro: "1024px",
        desktop: "1440px",
      },

      fontFamily: {
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
        inter: "Inter",
        fredoka: "Fredoka One",
      },
    },
  },
  plugins: [],
});
