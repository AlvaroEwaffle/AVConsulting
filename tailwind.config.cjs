/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2175a1', // Álvaro Villena blue
        secondary: '#195c80', // Darker blue for hover states
        accent: '#e6f0f7', // Light blue background
        background: '#e6f0f7',
        'text-dark': '#333333',
        'text-light': '#666666',
      },
      animation: {
        'scroll-left': 'scroll-left 80s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-200%)' },
        },
        'fadeIn': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
  