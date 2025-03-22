/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-light-blue': '#f5fcff',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Set Roboto as the default sans-serif font
        playfair:["Playfair Display", 'serif'],
      },
    },
  },
  plugins: [],
}

