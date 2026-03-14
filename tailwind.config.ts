import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f8ff',
          500: '#2850a7',
          700: '#1f3f84'
        }
      }
    }
  },
  plugins: [],
} satisfies Config;
