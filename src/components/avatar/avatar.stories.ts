import { Meta, StoryObj } from "@storybook/html";
import type { Components } from "../../components.js";

const meta = {
  title: 'Atoms/Avatar',
  render: (args) => `<didroom-avatar name="${args.name}" src="${args.src}" size="${args.size}" shape="${args.shape}"></didroom-avatar>`,
} satisfies Meta<Components.DidroomAvatar>

export default meta;
type Story = StoryObj<Components.DidroomAvatar>

export const Rounded: Story = {
  args: {
    size: 'xl',
    name: 'Puria Nafisi Azizi',
    src: 'https://api.dicebear.com/7.x/open-peeps/svg?seed=rounded',
    shape: 'round'
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/@storybook/addon-designs-sample",
    },
  },
}


export const Initials: Story = {
  args: {
    name: 'Puria Nafisi Azizi',
    size: 'l'
  },
}

export const Square: Story = {
  args: {
    name: 'Ennio Nannio',
    size: 'l',
    src: 'https://api.dicebear.com/7.x/open-peeps/svg?seed=square',
    shape: 'square'
  },
}

export const FallbackIcon: Story = {
  args: {
    size: 'm',
    name: ''
  },
}