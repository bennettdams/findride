// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--global-findride-font)', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      dprimary: '#db5b55',
      dsecondary: '#1e3159',
      dtertiary: '#edf5ea',
      dlight: '#eff2f8',
    },
  },
  plugins: [],
}
