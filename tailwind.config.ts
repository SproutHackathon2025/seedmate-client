import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Added for GEMINI.md structure
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        pastel: {
          pink: 'var(--pastel-pink)',
          blue: 'var(--pastel-blue)',
          green: 'var(--pastel-green)',
          yellow: 'var(--pastel-yellow)',
          peach: 'var(--pastel-peach)',
          lavender: 'var(--pastel-lavender)',
          mint: 'var(--pastel-mint)',
          coral: 'var(--pastel-coral)',
          sky: 'var(--pastel-sky)',
        },
        soft: {
          beige: 'var(--soft-beige)',
          cream: 'var(--warm-cream)',
        },
      },
    },
  },
  plugins: [],
}
export default config
