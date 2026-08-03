/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Lacquer red · antique gold · rice paper · warm ink */
        "brand-red": "#A51D2E",
        "brand-red-dark": "#6F0F1A",
        "brand-gold": "#C4A04A",
        "brand-gold-light": "#E4C878",
        "ink-black": "#161210",
        charcoal: "#2A221E",
        "warm-white": "#F3EBE0",
        "paper-white": "#FAF6EE",
        "metal-gray": "#A89B8C",
        /* Subtle eastern accent (jade wash — use sparingly) */
        jade: "#3D5C54",
        lacquer: "#8B1524",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Archivo", "Manrope", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "7xl": "80rem",
      },
      boxShadow: {
        seal: "0 8px 28px -12px rgba(165, 29, 46, 0.45)",
        gold: "0 8px 28px -12px rgba(196, 160, 74, 0.4)",
        paper: "0 12px 40px -20px rgba(22, 18, 16, 0.18)",
      },
      backgroundImage: {
        "rice-paper":
          "radial-gradient(rgba(22, 18, 16, 0.035) 0.7px, transparent 0.7px)",
        "silk-red":
          "linear-gradient(135deg, #6F0F1A 0%, #A51D2E 45%, #8B1524 100%)",
        "ink-wash":
          "linear-gradient(180deg, #161210 0%, #2A221E 55%, #1C1613 100%)",
      },
    },
  },
  plugins: [],
};
