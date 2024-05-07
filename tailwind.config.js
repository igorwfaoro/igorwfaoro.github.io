/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        primary: '#3B8640',
        secondary: '#3D444E',
        highlight: '#26008f'
      }
    }
  },
  plugins: [
    require('tailwind-gradient-mask-image'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/typography')
  ]
};
