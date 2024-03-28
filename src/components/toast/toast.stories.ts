import { DToast } from './d-toast';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/Molecule/Toast',
  render: args =>
    `<d-toast 
    feedback="${args.feedback}"
    type="${args.type}"
    ${args.message && `message="${args.message}"`} 
    </d-toast>`,
} satisfies Meta<DToast>;

export default meta;
type Story = StoryObj<DToast>;

export const Default: Story = {
  args: {
    feedback: 'Credential Issued succesfully',
    type: 'success',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?node-id=3449%3A48602&mode=dev',
    },
  },
};

export const Error: Story = {
  args: {
    feedback: '404 - Not Found',
    type: 'error',
  }
};

export const SuccessWithMessage: Story = {
  args: {
    ...Default.args,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id turpis ac libero tincidunt fermentum. Nullam nec tortor nec ante tincidunt fermentum. Nullam nec tortor nec ante tincidunt fermentum.',
  }
};

export const ErrorWithMessage: Story = {
  args: {
    ...Error.args,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id turpis ac libero tincidunt fermentum. Nullam nec tortor nec ante tincidunt fermentum. Nullam nec tortor nec ante tincidunt fermentum.',
  }
};



