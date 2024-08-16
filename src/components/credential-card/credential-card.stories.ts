import { DCredentialCard } from './d-credential-card';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/DATA DISPLAY/CredentialCard',
  render: args =>
    `<d-credential-card 
    name="${args.name}" 
    issuer="${args.issuer}" 
    expiration-date="${args.expirationDate}" 
    issued-by-label="${args.issuedByLabel}"
    expiration-label="${args.expirationLabel}"
    verified="${args.verified}">
    <d-badge>address</d-badge>
    <d-badge>email</d-badge>
    </d-credential-card>`,
} satisfies Meta<DCredentialCard>;

export default meta;
type Story = StoryObj<DCredentialCard>;

export const Default: Story = {
  args: {
    name: 'Over 18',
    issuer: 'Italian Government',
    issuedByLabel: 'issued by',
    expirationLabel: 'exp',
    expirationDate: '2017-01-01',
    verified: false,
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
