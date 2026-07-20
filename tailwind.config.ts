import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        glass: {
          base: "rgba(255, 255, 255, 0.03)",
          hover: "rgba(255, 255, 255, 0.08)",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(255, 255, 255, 0.2)",
        },
        accent: {
          cyan: "#06B6D4",
          violet: "#8B5CF6",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-accent": "linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)",
        "gradient-glass": "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      animation: {
        "blob": "blob 15s infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
