import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';

const meta = {
  title: 'Design System/Atoms/ScanButton',
  render: ()=> `<d-scan-button>Scan</d-scan-button>`,
} satisfies Meta<Components.DScanButton>;

export default meta;
type Story = StoryObj<Components.DScanButton>;

export const Default: Story = {};