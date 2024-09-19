/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        dmSans: ['"DM Sans"', "sans-serif"], // Define DM Sans
        montserrat: ['"Montserrat"', "sans-serif"], // Define Montserrat
        poppins: ['"Poppins"', "sans-serif"], // Define Poppins
        bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
