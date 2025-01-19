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
        serif: ["Merriweather", "serif"],
      },
      colors: {
        "yellow-light-arava": "#EFD46D",
        "yellow-dark-arava": "#BF8C2E",
      },
    },
  },
  plugins: [],
};
