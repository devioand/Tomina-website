/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/layout/**/*.{js,jsx,ts,tsx}`
  ],
  theme: {
    extend: {
      screens: {
        small: "424px",
        XXL: "1441px",
      },
    },
  },
  plugins: [],
}
