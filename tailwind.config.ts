import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat Variable"', 'sans-serif'],
      },
      colors: {
        'tab': 'var(--tab)',
        'surface': 'var(--surface)',
        'primary': 'var(--primary)',
        'on-primary': 'var(--on-primary)',
        'on-primary-2': 'var(--on-primary-2)',
        'accent': 'var(--accent)',
        'on-accent': 'var(--on-accent)',
        'status-bar': 'var(--status-bar)',
        'inverted-tab': 'var(--inverted-tab)',
        'inverted-surface': 'var(--inverted-surface)',
        'inverted-primary': 'var(--inverted-primary)',
        'inverted-on-primary': 'var(--inverted-on-primary)',
        'inverted-on-primary-2': 'var(--inverted-on-primary-2)',
        'inverted-accent': 'var(--inverted-accent)',
        'inverted-on-accent': 'var(--inverted-on-accent)',
        'inverted-status-bar': 'var(--inverted-status-bar)',
      },
    },
  },
} satisfies Config;
