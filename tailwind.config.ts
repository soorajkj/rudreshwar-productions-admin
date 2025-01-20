import type { Config } from "tailwindcss";
import aria from "tailwindcss-aria-attributes";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "family-mono": "var(--font-geist-mono)",
      "family-sans": "var(--font-geist-sans)",
    },
  },
  darkMode: "class",
  plugins: [aria],
} satisfies Config;
