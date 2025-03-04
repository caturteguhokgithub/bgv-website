/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Graphik", "sans-serif"],
      },
      colors: {
        "yellow-light-arava": "#EFD46D",
        "yellow-dark-arava": "#BF8C2E",
        "green-neon": "#00eec6",
        "bnext-orange": "#F2520D",
      },
    },
  },
  plugins: [],
};
