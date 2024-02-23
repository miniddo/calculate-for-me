/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      notoSans: ['Noto Sans KR', 'sans-serif'],
      nanum: ['NanumNaEuiANaeSonGeurSsi'],
    },
    extend: {
      colors: {
        default: '#2a2a2a',
        primary: '#eea95f',
        secondary: '#454a51',
        alternative: '#fcfcfc',
      },
    },
  },
  safelist: ['bg-primary', 'bg-secondary', 'text-default', 'text-alternative'],
  plugins: [],
};
