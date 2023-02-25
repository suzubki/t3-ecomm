/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-primary": "#f1f5f9",
        "dark-primary": "#1f2937",
        "more-dark-primary": "#111827",
      },
    },
  },
  plugins: [],
};
