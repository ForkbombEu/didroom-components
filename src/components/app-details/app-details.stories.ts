import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';

const meta = {
  title: 'Design System/DATA DISPLAY/AppDetails',
  render: args => `<d-app-details version="${args.version}"></d-app-details>`,
} satisfies Meta<Components.DAppDetails>;

export default meta;

type Story = StoryObj<Components.DAppDetails>;

export const Default: Story = {
  args: {
    version: '1.0.9',
  },
};
