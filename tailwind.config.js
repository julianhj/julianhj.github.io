/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#039de1',
        secondary: '#ecc94b',
        // ...
      },
      textColor: {
        primary: '#039de1',
        secondary: '#ecc94b',
        // ...
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
