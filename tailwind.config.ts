import type { Config } from "tailwindcss";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "min-1184": "1184px",
        "min-1290": "1290px",
        "min-556": "556px",
        "min-360": "360px",
        "min-400": "400px",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Roboto_Condensed: ["Roboto Condensed", "sans-serif"],
        Bebas_Neue: ["Bebas Neue"],
        Space_Grotesk: ["Space Grotesk"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#303030",
        blue: "#0081A5",
        yellow: "#f5bc03",
        blueHover: "#1995b8",
        yellowHover: "#ffc300",
      },
    },
  },
  plugins: [aspectRatio],
} satisfies Config;
