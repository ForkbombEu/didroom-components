import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';
import { ColorArgTypes } from '../types.js';

const meta = {
  title: 'Design System/Atoms/Button',
  render: args => `<d-button color=${args.color} disabled=${args.disabled}>BUTTON</d-button>`,
  argTypes: {
    disabled: { control: 'boolean', description: 'Disable the button' },
    color: ColorArgTypes,
  },
} satisfies Meta<Components.DButton>;

export default meta;
type Story = StoryObj<Components.DButton>;

export const Default: Story = {
  args: {
    color: 'primary',
    href: '#',
    disabled: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?type=design&node-id=2584-15529&mode=design&t=7gAir6gIxMq07ebE-0',
    },
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    color: 'primary',
  },
};
export const Accent: Story = {
  args: {
    ...Default.args,
    color: 'accent',
  },
};
export const AccentDisabled: Story = {
  args: {
    ...Default.args,
    color: 'accent',
    disabled: true,
  },
};
export const PrimaryDisabled: Story = {
  args: {
    ...Default.args,
    color: 'primary',
    disabled: true,
  },
};
export const Link: Story = {
  args: {
    ...Default.args,
    href: '/',
  },
};
