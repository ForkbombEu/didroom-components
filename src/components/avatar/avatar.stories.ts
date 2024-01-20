import { Meta, StoryObj } from "@storybook/html";
import type { Components } from "../../components.js";
import { ShapeArgTypes, SizeArgTypes } from '../types.js';

const meta = {
  title: 'Design System/Atoms/Avatar',
  render: args => `<didroom-avatar name="${args.name}" src="${args.src}" size="${args.size}" shape="${args.shape}"></didroom-avatar>`,
  argTypes: {
    size: SizeArgTypes,
    shape: ShapeArgTypes,
  },
} satisfies Meta<Components.DidroomAvatar>;

export default meta;
type Story = StoryObj<Components.DidroomAvatar>;

export const Rounded: Story = {
  args: {
    src: `https://api.dicebear.com/7.x/open-peeps/svg?seed=${new Date()}`,
    name: 'Mickey Mouse',
    size: 'xl',
    shape: 'round',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/@storybook/addon-designs-sample',
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
