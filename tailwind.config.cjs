/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImage: 'url(./assets/images/iphone6.png)',


      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}
