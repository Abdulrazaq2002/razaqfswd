/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        jetBlack: "#343434",
        charcol: "#36454F",
      },
    },
  },
  plugins: [],
};
