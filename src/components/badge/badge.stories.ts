import { DBadge } from './d-badge';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/DATA DISPLAY/Badge',
  render: () =>
    `<d-badge>
      Address
    </d-badge>`,
} satisfies Meta<DBadge>;

export default meta;
type Story = StoryObj<DBadge>;

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?node-id=3449-47234&m=dev',
    },
  },
};
