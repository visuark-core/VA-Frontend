/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#0f172a', // Map white text to dark slate
        black: '#ffffff', // Map black to white for backgrounds
        cyan: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#399ed2', // Logo Sky-Blue Accent
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
        },
        gray: {
          950: '#f8fafc', // Light slate-50 background
          900: '#f1f5f9', // Slate-100 section background
          800: '#ffffff', // Opaque white cards
          700: '#e2e8f0', // Slate-200 border
          600: '#cbd5e1', // Slate-300 secondary border
          400: '#64748b', // Slate-500 secondary text
          300: '#334155', // Slate-700 primary body text
          200: '#1e293b', // Slate-800 dark text
          100: '#0f172a', // Slate-900 headings
        }
      }
    },
  },
  plugins: [],
};
