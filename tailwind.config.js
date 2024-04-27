/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'myfont': ['Source Code Pro', 'monospace'],
        'heroFont': ['Great Vibes']
      },
    },
  },
  plugins: [],
}

