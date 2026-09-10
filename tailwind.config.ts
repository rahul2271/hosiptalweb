import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#152E50",
        navy: "#152E50",
        navyDeep: "#0F213D",
        navyLight: "#1E3A61",
        cream: "#F4EEDD",
        creamDeep: "#E8DFC6",
        card: "#FFFFFF",
        ink: "#152E50",
        muted: "#6E6656",
        mutedLight: "#B9C3D2",
        gold: "#E0A03A",
        goldDeep: "#B97F22",
        line: "#E4DCC8",
        lineNavy: "#2C4E78",
      },
      fontFamily: {
        poppins: ["Poppins", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
