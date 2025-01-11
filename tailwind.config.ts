import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'recipe-primary': '#2F5233', // Dark green
        'recipe-secondary': '#97BC62', // Medium green
        'recipe-accent': '#C2E812', // Light lime
        'recipe-dark': '#1C3020', // Darker green
        'recipe-light': '#E8F3D6', // Light green
      },
      fontFamily: {
        sans: ['Lora', 'system-ui', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1C3020',
            fontFamily: 'Lora, serif',
            a: {
              color: '#2F5233',
              '&:hover': {
                color: '#97BC62',
              },
            },
            h1: {
              fontFamily: 'Playfair Display, serif',
              color: '#1C3020',
            },
            h2: {
              fontFamily: 'Playfair Display, serif',
              color: '#1C3020',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              fontFamily: 'Playfair Display, serif',
              color: '#1C3020',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            ul: {
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            ol: {
              marginTop: '1rem',
              marginBottom: '1rem',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
