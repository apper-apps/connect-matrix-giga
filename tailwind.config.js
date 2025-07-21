/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f1',
          100: '#dcf2de',
          500: '#2C5F2D',
          600: '#245024',
          700: '#1d401e',
          800: '#163117',
          900: '#102112'
        },
        secondary: {
          50: '#f7fdf2',
          100: '#ecfae1',
          500: '#97BC62',
          600: '#7ca552',
          700: '#618741',
          800: '#4a6932',
          900: '#364c25'
        },
        accent: {
          50: '#fff4f1',
          100: '#ffe6de',
          500: '#FF6B35',
          600: '#e55a2b',
          700: '#cc4a21',
          800: '#b33a17',
          900: '#992a0e'
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'hero': 'linear-gradient(rgba(44, 95, 45, 0.8), rgba(44, 95, 45, 0.6)), url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }
    },
  },
  plugins: [],
}