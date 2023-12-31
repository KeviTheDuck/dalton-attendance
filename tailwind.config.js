/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./templates/**/*.html'],
  theme: {
    extend: {
      gridTemplateColumns: {
        AttendanceGrid: 'auto auto auto',
        RecordsGrid: 'auto auto',
        StudentCards: 'repeat(auto-fit, minmax(350px, 1fr))',
      },
      keyframes: {
        'blob-spin': {
          '0%': {
            rotate: '0deg',
          },
          '50%': {
            scale: '1 1.5',
          },
          '100%': {
            rotate: '360deg',
          },
        },
      },
      animation: {
        'blob-spin': 'blob-spin 15s linear infinite',
      },
    },
  },
  plugins: [],
};
