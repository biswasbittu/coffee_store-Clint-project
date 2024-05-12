/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'navbar-bg': "url('./public/more/15.jpg')",
        'cover':"url('./public/more/3.png')"
      }),
},
  },
  plugins: [require('daisyui'),],
}