/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export const content = ["./src/**/*.{astro,html}"];
export const theme = {
  colors: {
    black: "#000000",
    pink: "#ec6ead",
    blue: "#00aeef",
    yellow: "#fff000",
    gray: "#d8d9d8",
    darkergray: "#848484",
    white: "#ffffff",
  },
  screens: {
    xs: "280px", // galaxy fold
    ...defaultTheme.screens,
  },
  extend: {
    width: {
      15: "15%",
    },
  },
};
export const plugins = [];
