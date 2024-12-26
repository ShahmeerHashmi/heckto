import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f2f0ff",
          DEFAULT: "#7e33e0",
          dark: "#1A0B5B",
        },
        accent: {
          light: "#FF77B6",
          DEFAULT: "#FB2E86",
          dark: "#E21E66",
        },
        secondary: {
          light: "#8A8FB9",
          DEFAULT: "#151875",
          dark: "#0D0E44",
        },
        neutral: {
          background: "#FFFFFF",
          text: "#151875",
          muted: "#8A8FB9",
        }
      },
      fontFamily: {
        sans: ['Josefin Sans', 'Arial', 'sans-serif'],
      },
      spacing: {
        container: '1320px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};

export default config;
