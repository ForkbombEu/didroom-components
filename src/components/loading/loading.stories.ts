import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';

const meta = {
  title: 'Design System/FEEDBACK & STATUS/Loading',
  render: args => `<div class="ion-page h-screen">
    <d-loading 
        ${args.loading && `loading=${args.loading}`} 
        ${args.message && `message=${args.message}`}
    >
        <ion-spinner/>
    </d-loading>
  </div>`,
  argTypes: {
    loading: { control: 'boolean' },
    message: { control: 'string', description: 'Message to display' },
  },
} satisfies Meta<Components.DLoading>;

export default meta;
type Story = StoryObj<Components.DLoading>;

export const Default: Story = {
  args: {
    loading: true,
  },
};

export const WithMessage: Story = {
  args: {
    loading: true,
    message: 'Loading...',
  },
};
