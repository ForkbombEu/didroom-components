import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';
import { ShapeArgTypes, SizeArgTypes } from '../types.js';

const meta = {
  title: 'Design System/MEDIA & ICONS/Avatar',
  render: args => `<d-avatar name="${args.name}" src="${args.src}" size="${args.size}" shape="${args.shape}"></d-avatar>`,
  argTypes: {
    size: SizeArgTypes,
    shape: ShapeArgTypes,
  },
} satisfies Meta<Components.DAvatar>;

export default meta;
type Story = StoryObj<Components.DAvatar>;

export const Rounded: Story = {
  args: {
    src: `https://api.dicebear.com/7.x/open-peeps/svg?seed=${new Date()}`,
    name: 'Mickey Mouse',
    size: 'xl',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?type=design&node-id=2005-930&mode=dev',
    },
  },
};

export const Initials: Story = {
  args: {
    ...Rounded.args,
    src: null,
  },
};

export const Square: Story = {
  args: {
    ...Rounded.args,
    shape: 'square',
  },
};

export const FallbackIcon: Story = {
  args: {
    ...Rounded.args,
    name: '',
    src: null,
  },
};
