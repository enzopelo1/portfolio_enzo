/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      // Personnalisations de couleurs, espacements, breakpoints
      // Ajouter des animations personnalisées si nécessaire
    },
  },
  plugins: [],
  // Configurer le mode dark si souhaité
  // darkMode: 'class',
}
