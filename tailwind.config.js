import { flizpayPreset } from "./lib/main";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("./lib/tailwind-base.js")],
};
