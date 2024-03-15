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
        secondary: {
          50: '#fceff4',
          100: '#f4cddd',
          200: '#efb4cc',
          300: '#e892b5',
          400: '#e47da6',
          500: '#dd5d90',
          600: '#c95583',
          700: '#9d4266',
          800: '#7a334f',
          900: '#5D273C',
          DEFAULT: '#DF5E91',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        neutral: {
          50: '#faf6f7',
          100: '#f0e3e7',
          200: '#e8d5db',
          300: '#dec2cb',
          400: '#d8b6c1',
          500: '#cea4b1',
          600: '#bb95a1',
          700: '#92747e',
          800: '#715a61',
          900: '#57454A',
          DEFAULT: '#CEA4B1',
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
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
