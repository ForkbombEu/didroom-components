import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';

const meta = {
  title: 'Design System/DATA DISPLAY/VerificationCard',
  render: args => `<d-verification-card 
  selected="${args.selected}" 
  relying-party="${args.relyingParty}"
  verifier="${args.verifier}"
  flow="${args.flow}"
  logo="${args.logo}"
  >
    <d-definition title="Date of Birth:" definition="24/05/1986" dotted></d-definition>
    <d-definition title="Address" definition="Via Da Milano, 23" dotted ></d-definition>
    <d-definition title="Fiscal Code" definition="VF935#kdefnknafo" dotted ></d-definition>
  </d-verification-card>`,
} satisfies Meta<Components.DVerificationCard>;

export default meta;
type Story = StoryObj<Components.DVerificationCard>;

export const Default: Story = {
  args: {
    selected: false,
    relyingParty: 'dyne.org',
    verifier: 'John Doe',
    flow: 'Age verification',
    logo: `https://api.dicebear.com/7.x/open-peeps/svg?seed=${new Date()}`,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?type=design&node-id=2005-930&mode=design&t=uW8kvn2nKPMvUzX7-0',
    },
  },
};

export const Selected: Story = {
  args: {
    ...Default.args,
    selected: true,
  },
};
