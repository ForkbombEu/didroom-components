import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';

const meta = {
  title: 'Design System/DATA DISPLAY/CredentialService',
  render: args => `<d-credential-service 
  name="${args.name}" 
  issuer="${args.issuer}" 
  href="${args.href}" 
  logo-src="${args.logoSrc}"
  ></d-credential-service>`,
} satisfies Meta<Components.DCredentialService>;

export default meta;
type Story = StoryObj<Components.DCredentialService>;

export const Default: Story = {
  args: {
    name: 'Over 18',
    issuer: 'Italian Government',
    logoSrc: `https://api.dicebear.com/9.x/icons/svg?seed=${new Date()}`,
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
