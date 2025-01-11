import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "#fff4e0", // Fundo claro
          semiLight: "#F5E6CA", // Fundo claro
          dark: "#1e1e1e", // Fundo escuro
        },
        card: {
          light: "#fff4e0", // Card claro
          dark: "#2d2b2b", // Card escuro
        },
        text: {
          light: "#210003", // Texto principal claro
          dark: "#d5bda4", // Texto principal escuro
          secondary: {
            light: "#603121", // Texto secundário claro
            dark: "#a08977", // Texto secundário escuro
          },
        },
        accent: {
          primary: "#ecc476", // Cor de destaque primária
          secondary: "#b5835a", // Cor de destaque secundária para links e botões
        },
        secondary: {
          light: "#f5d7a1", // Elementos secundários claros
          dark: "#603121", // Elementos secundários escuros
        },
        hover: {
          dark: "#e3c5aa", // Hover para links e botões no modo escuro
        },
        border: {
          dark: "#3c3c3c", // Bordas para modo escuro
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--text-primary)",
            h1: { color: "var(--accent-primary)" }, // Títulos H1 com a cor de destaque primária
            h2: { color: "var(--accent-primary)" }, // Títulos H2 com a cor de destaque primária
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
