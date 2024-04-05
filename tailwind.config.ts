import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: "#7F7C82",
        light: "#FFFFFF",
        blue: "#0C359E",
        danger:"#E72929",
        orange: "#FC6736",
        red: "#B40003",
      },
    },
  },
  plugins: [],
};
export default config;
