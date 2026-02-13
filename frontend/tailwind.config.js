/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            outfit: ['Outfit', 'sans-serif'],
            raleway: ['Raleway', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif'],
            'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
            mono: ['Roboto Mono', 'monospace'],
            dancing: ['Dancing Script', 'cursive'],
            playwrite: ['Playwrite NZ Basic', 'cursive'],
            snpro: ['SN Pro', 'sans-serif'],
            savate: ['Savate', 'sans-serif'],
        },
        animation: {
            blob: "blob 7s infinite",
            'gradient-x': 'gradient-x 15s ease infinite',
            'spin-slow': 'spin 3s linear infinite',
        },
        keyframes: {
            blob: {
                "0%": {
                    transform: "translate(0px, 0px) scale(1)",
                },
                "33%": {
                    transform: "translate(30px, -50px) scale(1.1)",
                },
                "66%": {
                    transform: "translate(-20px, 20px) scale(0.9)",
                },
                "100%": {
                    transform: "translate(0px, 0px) scale(1)",
                },
            },
            'gradient-x': {
                '0%, 100%': {
                    'background-size': '200% 200%',
                    'background-position': 'left center',
                },
                '50%': {
                    'background-size': '200% 200%',
                    'background-position': 'right center',
                },
            },
        },
      },
    },
    plugins: [
        require('scrollbar-hide')
    ],
  }
