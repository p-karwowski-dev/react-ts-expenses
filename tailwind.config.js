/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.app-column': {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'left',
          width: '40rem',
          fontWeight: 'normal',
        },
      })
    },
  ],
}
