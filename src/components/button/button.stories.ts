import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';
import { ColorArgTypes } from '../types.js';

const meta = {
  title: 'Design System/Atoms/Button',
  render: (args, story) => `<d-button color=${args.color} clear=${args.clear ? "true" : "false"} disabled=${args.disabled} ${args.href ? `href=${args.href}` : ''} size=${args.size} ${args.expand ? 'expand' : ''}>
  ${Boolean(story.parameters.slot) ? `<div slot="${story.parameters.slot.position}">${story.parameters.slot.icon}</div>` : ''}
  ${Boolean(story.parameters.slot?.position == 'icon-only') ? '' : 'BUTTON'}</d-button>`,
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
export const Outline: Story = {
  args: {
    ...Default.args,
    color: 'outline',
  },
};
export const clear: Story = {
  args: {
    ...Default.args,
    clear: true,
  },
};
export const clearAccent: Story = {
  args: {
    ...Default.args,
    clear: true,
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
export const ClearDisabled: Story = {
  args: {
    ...Default.args,
    clear: true,
    disabled: true,
  },
};
export const Expand: Story = {
  args: {
    ...Default.args,
    expand: true,
  },
};
export const IconBefore: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    slot: {
      position: 'start',
      icon: '🚀',
    },
  },
};

export const IconAfter: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    slot: {
      position: 'end',
      icon: '🚀',
    },
  },
};
export const IconOnly: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    slot: {
      position: 'icon-only',
      icon: '🚀',
    },
  },
};
export const clearWithIconOnly: Story = {
  args: {
    ...Default.args,
    clear: true,
  },
  parameters: {
    slot: {
      position: 'icon-only',
      icon: '🚀',
    },
  },
};


export const Link: Story = {
  args: {
    ...Default.args,
    href: '/',
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
};
