import { DInfoLed } from './d-info-led';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/FEEDBACK & STATUS/InfoLed',
  render: args =>
    `<d-info-led 
    type="${args.type}"
    </d-info-led>`,
} satisfies Meta<DInfoLed>;

export default meta;
type Story = StoryObj<DInfoLed>;

export const Default: Story = {
  args: {
    type: 'success',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?node-id=3449%3A48602&mode=dev',
    },
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
  },
};
