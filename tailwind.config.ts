import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f8f4ec",
        paper: "#fffdf8",
        ink: "#171514",
        muted: "#6f6860",
        line: "#ddd3c6",
        clay: "#8f4e3d",
        coffee: "#3a2b24",
        stone: "#b9ad9f"
      },
      fontFamily: {
        serif: [
          "Iowan Old Style",
          "Palatino Linotype",
          "Palatino",
          "Georgia",
          "serif"
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 28px 90px rgba(44, 33, 25, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
