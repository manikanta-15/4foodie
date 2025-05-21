/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#FFF9E5',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCF33',
          500: '#FFC300', // Turmeric yellow
          600: '#CC9C00',
          700: '#997500',
          800: '#664E00',
          900: '#332700',
        },
        secondary: {
          50: '#F5E6E6',
          100: '#EBCDCD',
          200: '#D79B9B',
          300: '#C36969',
          400: '#AF3737',
          500: '#9B0505', // Chili red
          600: '#7C0404',
          700: '#5D0303',
          800: '#3E0202',
          900: '#1F0101',
        },
        accent: {
          50: '#E5F0EC',
          100: '#CCE1D9',
          200: '#99C3B3',
          300: '#66A58D',
          400: '#338767',
          500: '#006941', // Cardamom green
          600: '#005434',
          700: '#003F27',
          800: '#002A1A',
          900: '#00150D',
        },
        success: {
          500: '#10B981', // Emerald
        },
        warning: {
          500: '#F59E0B', // Amber
        },
        error: {
          500: '#EF4444', // Red
        },
      },
      boxShadow: {
        'recipe-card': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};