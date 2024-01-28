import { DCredentialOffer } from './d-credential-offer';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/Molecule/CredentialOffer',
  render: args =>
    `<d-credential-offer 
    name="${args.name}" 
    issuer="${args.issuer}" 
    description="${args.description}" 
    long-description="${args.longDescription}"
    </d-credential-offer>`,
} satisfies Meta<DCredentialOffer>;

export default meta;
type Story = StoryObj<DCredentialOffer>;

export const Default: Story = {
  args: {
    name: 'Over 18',
    description: 'This credential proves that you are over 18 years old',
    longDescription:
      'Lorem ipsum dolor sit amet consectetur. Leo ultricies pellentesque morbi in eu metus commodo felis. Pellentesque facilisis a auctor enim lectus. Nulla dolor cras viverra massa.',
    issuer: 'Italian Government',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?node-id=2331%3A4432',
    },
  },
};
