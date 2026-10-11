import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: {
          DEFAULT: "#111111",
          elevated: "#1A1A1A",
          muted: "#0C0C0C",
          glass: "rgba(17, 17, 17, 0.75)",
        },
        accent: {
          DEFAULT: "#FF2929",
          secondary: "#C81020",
          glow: "rgba(255, 41, 41, 0.5)",
          subtle: "rgba(255, 41, 41, 0.12)",
          crimson: "#FF1F3D",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.12)",
          subtle: "rgba(255, 255, 255, 0.06)",
          active: "rgba(255, 41, 41, 0.4)",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A1A1A1",
          muted: "#666666",
        },
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(255, 41, 41, 0.45)",
        "glow-lg": "0 0 60px -10px rgba(255, 41, 41, 0.55)",
        "glow-sm": "0 0 15px -3px rgba(255, 41, 41, 0.35)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.8)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        "shimmer": "shimmer 2.5s infinite linear",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
