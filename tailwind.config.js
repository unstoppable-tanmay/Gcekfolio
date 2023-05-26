/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#8C8CF5',
      text_button: '#FFFFFF',
      white: '#FFFFFF',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
