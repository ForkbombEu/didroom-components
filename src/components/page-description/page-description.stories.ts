import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';

const meta = {
  title: 'Design System/DATA DISPLAY/PageDescription',
  render: args => `<d-page-description title='${args.title}' ${args.description ? `description="${args.description}"` : ''}></d-page-description>`,
} satisfies Meta<Components.DPageDescription>;

export default meta;
type Story = StoryObj<Components.DPageDescription>;

export const Default: Story = {
  args: {
    title: 'Issuance services',
    description: 'Request your credential from the followings:',
  },
  parameters: {},
};

export const NoDescription: Story = {
  args: {
    title: 'Issuance services',
  },
  parameters: {},
};
