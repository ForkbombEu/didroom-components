import type { Components } from '../../components.js';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/MEDIA & ICONS/Logo',
  render: () => `<d-logo></d-logo>`,
} satisfies Meta<Components.DLogo>;

export default meta;
type Story = StoryObj<Components.DLogo>;

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Uxc5APvp9BsY9r71rF8HhQ/DIDWallet-UI-Trial?node-id=100%3A1839&mode=dev',
    },
  },
};
