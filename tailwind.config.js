// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'], // Replace 'Merriweather' with the actual font name you're using
        'urbanist': ['Urbanist', 'sans-serif'], // Replace 'Urbanist' with the actual font name you're using
      },
    },
  },
  plugins: [],
}
