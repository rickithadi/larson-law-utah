/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          1: '#2563eb',
          2: '#1e40af', 
          3: '#1d4ed8',
          4: '#f3f4f6',
          5: '#374151',
          6: '#111827',
        }
      },
      fontFamily: {
        body: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

