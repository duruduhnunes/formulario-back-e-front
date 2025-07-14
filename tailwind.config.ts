import { keyframes } from "framer-motion";
import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
        gridTemplateColumns: {
          form: "minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)",
        },
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        borderWidth: {
          6: "6px",
        },
        colorss: {
          violet: {
            25: "#f2faff"
          },
        },
        animation: {
          // slideDownAndFade: "slideDownAndFade 1s lienar",
          slideUpAndFade: "slideUpAndFade 400ms cobic-bazier(0.16, 1, 0.3, 1)",
        },
        keyframes: {
          // slideDownAndFade: {
          //   from: { opacity: 0 },
          //   to: { opacity: 1 },
          // },
          slideUpAndFade: {
            from: { opacity: 1, transform: "translateY(-2px)" },
            to: { opacity: 0, transform: "translateY(0)" },
          },
        },
      },
    plugins: [],
  }
};
