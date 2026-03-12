import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        foreground: "#111111",
        muted: "#666666",
        accent: {
          DEFAULT: "#5865F2", // Discord-ish Blurple
          light: "#E3F2FD",
        },
        glass: {
          bg: "rgba(255, 255, 255, 0.7)",
          border: "rgba(255, 255, 255, 0.5)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
      borderRadius: {
        lg: "24px",
        md: "16px",
        sm: "8px",
      },
      boxShadow: {
        card: "0 8px 32px rgba(0, 0, 0, 0.04)",
      }
    },
  },
  plugins: [],
};
export default config;