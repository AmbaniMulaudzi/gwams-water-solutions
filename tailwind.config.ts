import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e8f4fd",
          100: "#c8e6fb",
          200: "#93ccf7",
          300: "#55aef2",
          400: "#2492eb",
          500: "#0b72d6",
          600: "#0557b3",
          700: "#064191",
          800: "#0a3478",
          900: "#0d2c63",
          950: "#091c42",
        },
        water: {
          light: "#4fc3f7",
          DEFAULT: "#0288d1",
          dark: "#01579b",
          teal: "#00acc1",
          cyan: "#00bcd4",
        },
        surface: {
          light: "#f8faff",
          DEFAULT: "#f0f4ff",
          dark: "#1a2744",
        },
      },
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "water-wave":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath d='M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z' fill='%230b72d6'/%3E%3C/svg%3E\")",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "wave": "wave 3s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-up": "slideUp 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wave: {
          "0%": { backgroundPositionX: "0" },
          "100%": { backgroundPositionX: "1200px" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        "water": "0 8px 32px rgba(11, 114, 214, 0.2)",
        "water-lg": "0 20px 60px rgba(11, 114, 214, 0.3)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 12px 40px rgba(11, 114, 214, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
