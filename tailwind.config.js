/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'deep-teal': '#004D4D',
        'deep-blue': '#004D70',
        'warm-gold': '#FFD166',
        
        // Accent Colors
        'royal-purple': '#5D4777',
        'sage-green': '#A3B18A',
        'mint-green': '#5ABFB1',
        'soft-parchment': '#F4E5C0',
        
        // Neutral Colors
        'cream': '#F5EEDC',
        'charcoal': '#333333',
        'light-gray': '#E5E5E5',
      }
    },
  },
  plugins: [],
}
