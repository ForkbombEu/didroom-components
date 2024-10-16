import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';

const meta = {
  title: 'Design System/MEDIA & ICONS/ScannerMask',
  render: args => `<d-scanner-mask
    ${args.heading ? `heading="${args.heading}"` : ''}
    ${args.description ? `description="${args.description}"` : ''} 
  ></d-scanner-mask>`,
} satisfies Meta<Components.DScannerMask>;

export default meta;
type Story = StoryObj<Components.DScannerMask>;

export const Default: Story = {
  args: {
    heading: 'Heading',
    description: 'Description',
  }
};
