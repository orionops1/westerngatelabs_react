import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      colors: {
        navy: {
          50:  "#f0f4ff",
          100: "#dce8ff",
          200: "#b9d0ff",
          300: "#85aaff",
          400: "#4d7aff",
          500: "#2563EB",
          600: "#1a4fbf",
          700: "#0f2d6e",
          800: "#0a1a45",
          900: "#03050f",
        },
        electric: {
          blue:   "#2563EB",
          cyan:   "#06B6D4",
          purple: "#7C3AED",
          dim:    "rgba(37, 99, 235, 0.12)",
          glow:   "rgba(37, 99, 235, 0.2)",
        },
      },
      animation: {
        fadeIn:       "fadeIn 0.6s ease-out",
        slideUp:      "slideUp 0.7s ease-out",
        "float":      "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)",    opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":   "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
