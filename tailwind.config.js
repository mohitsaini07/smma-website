/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      colors: {
        primary: "#FF895F",
        secondary: "#FFC49B",
        purplePrimary: "#6B46C1",
        creamWhite: "#FEF3C7",
        darkBlue: "#1E2336",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        josefin: ["Josefin Sans", "system-ui"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
