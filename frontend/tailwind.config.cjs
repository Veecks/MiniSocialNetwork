/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'pri': {
          '50': '#f6f6f9',
          '100': '#ececf2',
          '200': '#d4d4e3',
          '300': '#aeafcb',
          '400': '#8385ad',
          '500': '#636694',
          '600': '#484970',
          '700': '#404064',
          '800': '#383854',
          '900': '#323248',
        },
      },
    },
  },
  plugins: [],
}
