const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"sans-pro"', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      'xs': '650',
      ...defaultTheme.screens,
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

