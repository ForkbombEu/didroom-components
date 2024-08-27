import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';

const meta = {
  title: 'Design System/LAYOUT/SwipablePage',
  render: args => `<d-swipable-page 
    background="${args.background}"
    title="${args.title}"
    subtitle="${args.subtitle}"
    description="${args.description}"
  >
    <d-illustration illustration="logo-hand" />
    </d-swipable-page>`,
} satisfies Meta<Components.DSwipablePage>;

export default meta;
type Story = StoryObj<Components.DSwipablePage>;

export const Default: Story = {
  args: {
    background: 'https://wallet.zenswarm.forkbomb.eu/src/lib/assets/bg-1.svg',
    title: 'Title',
    subtitle: 'Subtitle',
    description: 'Description',
  },
};
