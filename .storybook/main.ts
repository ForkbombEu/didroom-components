import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-themes',
    '@storybook/addon-designs',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: { },
  },
  async viteFinal(config, options) {
    config.assetsInclude =  ['**/*.md']
    return config;
  },
  docs: {
    autodocs: true,
  },
};
export default config;
