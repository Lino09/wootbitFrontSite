module.exports = {
  purge: {
    options:{
      safelist:['bg-red-200', 'text-red-800','bg-green-200', 'text-green-800','bg-purple-200', 'text-purple-800','bg-blue-200', 'text-blue-800','bg-yellow-200', 'text-yellow-800','bg-indigo-200', 'text-indigo-800','bg-pink-200', 'text-pink-800']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}
