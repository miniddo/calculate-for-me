/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Noto Sans KR', 'sans-serif'],
    },
    extend: {
      colors: {
        default: '#2a2a2a',
        primary: '#f4c3b2',
        secondary: '#454a51',
        alternative: '#fcfcfc',
      },
    },
  },
  safelist: ['bg-primary', 'bg-secondary', 'text-default', 'text-alternative'],
  plugins: [],
};
