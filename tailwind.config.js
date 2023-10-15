/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['roboto condensed', 'system-ui'],
        'neue': ['Helvetica Neue', 'system-ui'],
        'inter': ['Inter', 'system-ui']
    },
  },
  plugins: [],
}
}
