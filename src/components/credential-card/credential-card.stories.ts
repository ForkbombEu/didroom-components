import { DCredentialCard } from './d-credential-card';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/Molecule/CredentialCard',
  render: args =>
    `<d-credential-card 
    name="${args.name}" 
    issuer="${args.issuer}" 
    description="${args.description}" 
    expiration-date="${args.expirationDate}" 
    verified="${args.verified}">
    </d-credential-card>`,
} satisfies Meta<DCredentialCard>;

export default meta;
type Story = StoryObj<DCredentialCard>;

export const Default: Story = {
  args: {
    name: 'Over 18',
    description: 'This credential proves that you are over 18 years old',
    issuer: 'Italian Government',
    expirationDate: '2017-01-01',
    verified: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?node-id=2053%3A11527&mode=dev',
    },
  },
};

export const Verified: Story = {
  args: {
    ...Default.args,
    verified: true,
  },
};


