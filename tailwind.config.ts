import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-delay': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '50%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-1': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(40px, -40px) rotate(10deg)' },
        },
        'float-2': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-40px, 40px) rotate(-10deg)' },
        },
        'float-3': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(60px, 20px) rotate(6deg)' },
        },
        'float-4': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-60px, -20px) rotate(-6deg)' },
        },
        'float-5': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(30px, 60px) rotate(4deg)' },
        },
        'float-6': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-30px, -60px) rotate(-4deg)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-delay': 'fade-in-delay 1s ease-out forwards',
        'float-1': 'float-1 6s ease-in-out infinite',
        'float-2': 'float-2 8s ease-in-out infinite',
        'float-3': 'float-3 10s ease-in-out infinite',
        'float-4': 'float-4 7s ease-in-out infinite',
        'float-5': 'float-5 9s ease-in-out infinite',
        'float-6': 'float-6 11s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config 