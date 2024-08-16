import { DInput } from './d-input';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/FORMS/Input',
  render: args =>
    `<d-input 
      name="${args.name}" 
      label="${args.label}" 
      value="${args.value}" 
      type="${args.type}"
      placeholder="${args.placeholder}" 
      helper-text="${args.helperText}" 
      ${args.errorText ? `error-text="${args.errorText}"` : ''}
      ${args.clearButton ? 'clear-button' : ''}
      ${args.personIcon ? 'person-icon' : ''}
      ${args.autoFocus ? 'autofocus' : ''}
      ${args.hidable ? 'hidable' : ''}
    ></d-input>`,
} satisfies Meta<DInput>;

export default meta;
type Story = StoryObj<DInput>;

export const Default: Story = {
  args: {
    name: 'input',
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper text',
    value: 'Value',
    type: 'text',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?type=design&node-id=1240-14918&mode=design&t=8XpkAMSjaMrPNeqn-0',
    },
  },
};

export const Password: Story = {
  args: {
    ...Default.args,
    type: 'password',
  },
};

export const PasswordHidable: Story = {
  args: {
    ...Default.args,
    type: 'password',
    hidable: true,
  },
};

export const TextHidable: Story = {
  args: {
    ...Default.args,
    hidable: true,
  },
};

export const WithClearButton: Story = {
  args: {
    ...Default.args,
    clearButton: true,
  },
};

export const WithPersonIcon: Story = {
  args: {
    ...Default.args,
    personIcon: true,
  },
};

export const WithAutoFocus: Story = {
  args: {
    ...Default.args,
    autoFocus: true,
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    errorText: 'Error text',
  },
};
