import { preset } from "./src/styles/preset";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import aria from "tailwindcss-aria-attributes";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: { extend: {} },
  presets: [preset],
  plugins: [aria, animate],
} satisfies Config;
