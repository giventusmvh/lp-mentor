/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      boxShadow: {
        s1: "0px 9.9px 21.6px rgba(1, 71, 255, 0.41)",
        s2: "2px 12px 20px 0px rgba(90, 117, 167, 0.17)",
        s3: "drop-shadow(31.6228px 94.8683px 80px rgba(0, 0, 0, 0.11)) drop-shadow(20.4962px 61.4887px 46.8519px rgba(0, 0, 0, 0.0835185)) drop-shadow(12.1806px 36.5419px 25.4815px rgba(0, 0, 0, 0.0668148)) drop-shadow(6.32456px 18.9737px 13px rgba(0, 0, 0, 0.055)) drop-shadow(2.57667px 7.73001px 6.51852px rgba(0, 0, 0, 0.0431852)) drop-shadow(0.585607px 1.75682px 3.14815px rgba(0, 0, 0, 0.0264815));",
      },
      colors: {
        primary: "#187CFF",
        secondary: "#FFD200",
      },
    },
  },
  // plugins: [[require("@tailwindcss/forms")]],
};
