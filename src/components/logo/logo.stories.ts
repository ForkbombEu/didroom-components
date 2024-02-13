import { DLogo } from './d-logo';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/Atoms/Logo',
  render: () =>
    `<d-logo></d-logo>`,
} satisfies Meta<DLogo>;

export default meta;
type Story = StoryObj<DLogo>;

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Uxc5APvp9BsY9r71rF8HhQ/DIDWallet-UI-Trial?node-id=100%3A1839&mode=dev',
    },
  },
};
