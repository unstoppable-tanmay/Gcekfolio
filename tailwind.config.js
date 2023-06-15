/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#8C8CF5',
      text_button: '#FFFFFF',
      white: '#FFFFFF',
      black: '#000000',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      Tahoma: ['Tahoma', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
