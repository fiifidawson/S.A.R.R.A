import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Display"', "Inter", "Helvetica Neue", "sans-serif"],
      },
      colors: {
        accent: "#3B82F6",
      },
      maxWidth: {
        site: "1200px",
      },
      padding: {
        site: "120px",
        "site-md": "40px",
        "site-sm": "20px",
      },
    },
  },
  plugins: [],
};

export default config;
