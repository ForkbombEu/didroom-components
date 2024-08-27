import { DBackgroundIllustration } from './d-background-illustration';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/MEDIA & ICONS/Background-illustration',
  render: args => {
    console.log(args);
    return `<d-background-illustration background="${args.background}">
      <d-illustration illustration="chat"/>
    </d-background-illustration>`;
  },
} satisfies Meta<DBackgroundIllustration>;

export default meta;
type Story = StoryObj<DBackgroundIllustration>;

export const Default: Story = {
  args: {
    background: 'https://wallet.zenswarm.forkbomb.eu/src/lib/assets/bg-1.svg',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?node-id=3449-47234&m=dev',
    },
  },
};
