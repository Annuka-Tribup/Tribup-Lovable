/** ============================================================
 *  TRIBUP — TAILWIND CONFIG
 *  Étend Tailwind avec les tokens Tribup.
 *  ============================================================ */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tribup: {
          green:         '#32d856',
          'green-light': '#44ee68',
          'green-accent':'#3ACC59',
          white:         '#ffffff',
          dark:          '#1a1a1a',
        },
      },
      fontFamily: {
        title: ['Oswald', 'sans-serif'],
        body:  ['Nunito Sans', 'sans-serif'],
      },
      boxShadow: {
        'tribup-green':    '0 0 15px rgba(58, 204, 89, 0.6)',
        'tribup-green-lg': '0 0 25px rgba(58, 204, 89, 0.8)',
      },
    },
  },
  plugins: [],
}
