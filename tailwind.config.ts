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
        primary: "#5367FE",
        oil: "#080808",
        midnight: "#121318",
        charcoal: "#9295A6",
        stone: "#6A7080",
      },
    },
  },
  plugins: [],
};
export default config;
