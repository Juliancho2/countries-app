/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content:  ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundColor:{
        'dark-primary': 'hsl(209, 23%, 22%)',
        'light-primary': '#FAFAFA',
        'dark-secondary': 'hsl(207, 26%, 17%)',
        'light-secondary': '#ffff',
      },
      textColor:{
        'dark-text': 'hsl(0, 0%, 100%)',
        'light-text': 'hsl(200, 15%, 8%)',
        'dark-text-light': 'hsl(200, 15%, 8%)',
        'light-text-light': 'hsl(0, 0%, 52%)',
      }
    },
  },
  plugins: [],
}

