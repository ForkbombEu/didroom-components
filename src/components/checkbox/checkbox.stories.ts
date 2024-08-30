import { DCheckbox } from './d-checkbox';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/DATA DISPLAY/Checkbox',
  render: () =>
    `<d-checkbox>
      pippo
    </d-checkbox>`,
} satisfies Meta<DCheckbox>;

export default meta;
type Story = StoryObj<DCheckbox>;

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?node-id=3449-47234&m=dev',
    },
  },
};
