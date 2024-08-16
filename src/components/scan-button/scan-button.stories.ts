import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';

const meta = {
  title: 'Design System/NAVIGATION/ScanButton',
  render: () => `<d-scan-button href="#">Scan</d-scan-button>`,
} satisfies Meta<Components.DScanButton>;

export default meta;
type Story = StoryObj<Components.DScanButton>;

export const Default: Story = {
  args:{
    href: '#'
  }
};