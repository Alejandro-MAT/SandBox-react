/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#5eb9f0",
        "paragraph-color": "#60697b",
        "font-color": "#606978",
        "heading-color": "#343f52",
        "skyblue-color": "#e5f4fd",
        "white": "#ffffff",
        "light-gray": "#f0f8fe",
        "gray": "#fefefe",
      },
    },
  },
  plugins: [],
};
