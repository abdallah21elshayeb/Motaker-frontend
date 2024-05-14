/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '-28px 28px 56px #828282, 28px -28px 56px #ffffff',
      },
      colors: {
        secondaryColor: '#002347',
        thirdColor: '#ffc107',
      },
    },
  },
  plugins: [flowbitePlugin],
};
