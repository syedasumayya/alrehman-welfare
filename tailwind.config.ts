import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a2a5e',
          dark:    '#0f1a3d',
          mid:     '#243370',
        },
        gold: {
          DEFAULT: '#f59e0b',
          light:   '#fbbf24',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        arabic:  ['Amiri', 'serif'],
        body:    ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config