import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: "#030712",
          dark: "#0a0f1e",
          card: "#0d1424",
          border: "#1a2444",
          purple: "#8b5cf6",
          purpleL: "#a78bfa",
          cyan: "#06b6d4",
          cyanL: "#67e8f9",
          pink: "#ec4899",
          gold: "#f59e0b",
          silver: "#94a3b8",
          bronze: "#b45309",
        },
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "monospace"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(139,92,246,0.4)",
          },
          "50%": {
            boxShadow:
              "0 0 40px rgba(139,92,246,0.8), 0 0 80px rgba(6,182,212,0.3)",
          },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "rank-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(139,92,246,0.3)" },
          "50%": { borderColor: "rgba(6,182,212,0.8)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "scan-line": "scan-line 8s linear infinite",
        float: "float 3s ease-in-out infinite",
        "rank-up": "rank-up 0.5s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
        "border-glow": "border-glow 4s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-down": "slide-down 0.3s ease-out forwards",
        pulse2: "pulse2 2s ease-in-out infinite",
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.05) 1px, transparent 1px)",
        "cyber-radial":
          "radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(139,92,246,0.3), transparent)",
      },
      backgroundSize: {
        "grid-40": "40px 40px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".glass": {
          background: "rgba(13, 20, 36, 0.8)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        },
        ".glass-light": {
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        },
        ".neon-text-purple": {
          textShadow:
            "0 0 10px rgba(139,92,246,0.8), 0 0 20px rgba(139,92,246,0.4)",
        },
        ".neon-text-cyan": {
          textShadow:
            "0 0 10px rgba(6,182,212,0.8), 0 0 20px rgba(6,182,212,0.4)",
        },
        ".neon-text-gold": {
          textShadow:
            "0 0 10px rgba(245,158,11,0.8), 0 0 20px rgba(245,158,11,0.4)",
        },
        ".neon-border-purple": {
          boxShadow:
            "0 0 10px rgba(139,92,246,0.3), inset 0 0 10px rgba(139,92,246,0.05)",
        },
        ".neon-border-cyan": {
          boxShadow:
            "0 0 10px rgba(6,182,212,0.3), inset 0 0 10px rgba(6,182,212,0.05)",
        },
        ".neon-border-gold": {
          boxShadow:
            "0 0 15px rgba(245,158,11,0.4), inset 0 0 10px rgba(245,158,11,0.05)",
        },
        ".text-gradient-purple-cyan": {
          background:
            "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        },
        ".text-gradient-gold": {
          background:
            "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #f59e0b 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        },
        ".bg-gradient-purple-cyan": {
          background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
        },
        ".scanlines": {
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)",
        },
        ".cyber-card": {
          background: "rgba(13, 20, 36, 0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(26, 36, 68, 0.8)",
          transition: "all 0.3s ease",
        },
      });
    }),
  ],
};

export default config;
