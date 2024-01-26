import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Gantari Variable"', 'sans-serif'],
      },
      colors: {
        'surface': 'var(--surface)',
        'primary': 'var(--primary)',
        'on': 'var(--on)',
        'on-alt': 'var(--on-alt)',
        'accent': 'var(--accent)',
        'on-accent': 'var(--on-accent)',
        'success': 'var(--success)',
        'warning': 'var(--warning)',
        'error': 'var(--error)',
      },
    },
  },
} satisfies Config;