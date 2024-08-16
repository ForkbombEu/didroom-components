import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';

const meta = {
  title: 'Design System/LAYOUT/Header',
  render: args =>
    `<d-header back-button='${args.backButton}'  settings='${args.settings}'>
      title
      <div slot="settings">settings content</div>
    </d-header>
    <ion-content id="main-content"/>`,
} satisfies Meta<Components.DHeader>;

export default meta;
type Story = StoryObj<Components.DHeader>;

export const Default: Story = {
  args: {
    backButton: false,
    settings: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?node-id=3825-34382',
    },
  },
};

export const BackButton: Story = {
  args: {
    backButton: true,
    settings: false,
  },
};

export const Settings: Story = {
  args: {
    backButton: false,
    settings: true,
  },
};
