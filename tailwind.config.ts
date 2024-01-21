import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        'tab': 'var(--tab)',
        'surface': 'var(--surface)',
        'primary': 'var(--primary)',
        'on-primary': 'var(--on-primary)',
        'on-primary-2': 'var(--on-primary-2)',
        'accent': 'var(--accent)',
        'on-accent': 'var(--on-accent)',
        'status-bar': 'var(--status-bar)',
      },
    },
  },
} satisfies Config;