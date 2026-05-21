import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        champagne: '#c8a96a',
        pearl: '#f7f2e8',
        porcelain: '#fffaf0',
        ink: '#15120e',
        smoke: '#756f63',
        sable: '#262018',
      },
      boxShadow: {
        editorial: '0 32px 90px rgba(21, 18, 14, 0.13)',
        glow: '0 22px 70px rgba(200, 169, 106, 0.26)',
        card: '0 20px 60px rgba(21, 18, 14, 0.18)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate3d(0,0,0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0,-16px,0) rotate(0.8deg)' },
        },
        cardSheen: {
          '0%': { transform: 'translateX(-140%) rotate(15deg)' },
          '50%': { transform: 'translateX(140%) rotate(15deg)' },
          '100%': { transform: 'translateX(140%) rotate(15deg)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        floatSlow: 'floatSlow 9s ease-in-out infinite',
        cardSheen: 'cardSheen 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
