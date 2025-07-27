import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6b21a8", // púrpura místico
      },
    },
  },
  plugins: [],
};

export default config;