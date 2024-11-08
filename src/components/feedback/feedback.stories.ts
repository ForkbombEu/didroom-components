import { DFeedback } from './d-feedback';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/FEEDBACK & STATUS/Feedback',
  render: args =>
    `<d-feedback 
    feedback="${args.feedback}"
    type="${args.type}"
    ${args.message && `message="${args.message}"`} 
    </d-feedback>`,
} satisfies Meta<DFeedback>;

export default meta;
type Story = StoryObj<DFeedback>;

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

export const Void: Story = {
  args: {
    feedback: '',
  },
};

export const Error: Story = {
  args: {
    feedback: '404 - Not Found',
    type: 'error',
  },
};

export const SuccessWithMessage: Story = {
  args: {
    ...Default.args,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id turpis ac libero tincidunt fermentum. Nullam nec tortor nec ante tincidunt fermentum. Nullam nec tortor nec ante tincidunt fermentum.',
  },
};

export const ErrorWithMessage: Story = {
  args: {
    ...Error.args,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id turpis ac libero tincidunt fermentum. Nullam nec tortor nec ante tincidunt fermentum. Nullam nec tortor nec ante tincidunt fermentum.',
  },
};

export const WithAnsiEscapeCharacters: Story = {
  args: {
    ...Error.args,
    message: '\u001b[1;31mThis is red text\u001b[0m',
  },
};
