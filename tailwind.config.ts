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
        'macos-red': '#ff5f56',
        'macos-yellow': '#ffbd2e',
        'macos-green': '#27c93f',
      },
      backdropBlur: {
        'macos': '40px',
      },
    },
  },
  plugins: [],
};

export default config;

