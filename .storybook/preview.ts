import { Preview, HtmlRenderer}  from '@storybook/html';
import { withThemeByClassName } from "@storybook/addon-themes";
import { defineCustomElements } from '../loader';

defineCustomElements();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
  withThemeByClassName<HtmlRenderer>({
    themes: {
      light: "",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
 ]
};

export default preview;
