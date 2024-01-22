import { Preview, HtmlRenderer } from '@storybook/html';
import { withThemeByClassName } from '@storybook/addon-themes';
import { defineCustomElements } from '../loader';

defineCustomElements();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: { toc: true },
  },
  decorators: [
    withThemeByClassName<HtmlRenderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
