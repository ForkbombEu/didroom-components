import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';

const meta = {
  title: 'Design System/Molecule/CredentialService',
  render: args => `<d-credential-service name="${args.name}" issuer="${args.issuer}" description="${args.description}" href="${args.href}"></didroom-avatar>`,
} satisfies Meta<Components.DCredentialService>;

export default meta;
type Story = StoryObj<Components.DCredentialService>;

export const Default: Story = {
  args: {
    name: 'Over 18',
    description: 'Age Validation',
    issuer: 'Italian Government',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?type=design&node-id=2005-930&mode=design&t=uW8kvn2nKPMvUzX7-0',
    },
  },
};

export const WithoutLink: Story = {
  args: {
    ...Default.args,
    href: '',
  },
};

export const WithLink: Story = {
  args: {
    ...Default.args,
    href: 'https://dyne.org',
  },
};
