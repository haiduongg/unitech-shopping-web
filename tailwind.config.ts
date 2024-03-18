import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        black: '#09090b',
        white: '#ffffff',
        bgWhite: '#fbfbfb',
        hover: {
          light: '#cec4eb',
          normal: '#6242BF',
          dark: '#362469',
        },
        primary: {
          50: '#e6f7ff',
          100: '#b0e5fe',
          200: '#8ad8fe',
          300: '#54c7fe',
          400: '#33bcfd',
          500: '#00abfd',
          600: '#009ce6',
          700: '#0079b4',
          800: '#005e8b',
          900: '#00486a',
          DEFAULT: '#00ABFD',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        secondary: {
          50: '#efecf9',
          100: '#cec4eb',
          200: '#b7a8e2',
          300: '#9680d4',
          400: '#8168cc',
          500: '#6242bf',
          600: '#593cae',
          700: '#462f88',
          800: '#362469',
          900: '#291c50',
          DEFAULT: '#6242BF',
          foreground: 'hsl(var(--primary-foreground))',
        },
        neutral: {
          50: '#eaf6f6',
          100: '#bde4e2',
          200: '#9dd7d4',
          300: '#70c5c0',
          400: '#54b9b4',
          500: '#29a8a1',
          600: '#259993',
          700: '#1d7772',
          800: '#175c59',
          900: '#114744',
          DEFAULT: '#29A8A1',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        slider: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slider: 'slider 10s infinite linear',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
