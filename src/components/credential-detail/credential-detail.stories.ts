import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';

const meta = {
  title: 'Design System/Molecule/CredentialDetail',
  render: args =>
    `<d-credential-detail name="${args.name}" issuer="${args.issuer}" description="${args.description}" long-description="${args.longDescription}" href="${args.href}"></d-credential-detail>`,
} satisfies Meta<Components.DCredentialDetail>;

export default meta;
type Story = StoryObj<Components.DCredentialDetail>;

export const Default: Story = {
  args: {
    name: 'Over 18',
    description: 'Age Validation',
    longDescription:
      'Service description (optional). Lorem ipsum dolor sit amet consectetur. Leo ultricies pellentesque morbi in eu metus commodo felis. Pellentesque facilisis a auctor enim lectus. Nulla dolor cras viverra massa.',
    issuer: 'Italian Government',
    href: 'http://en.wikipedia.org/wiki/',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?type=design&node-id=2005-930&mode=design&t=uW8kvn2nKPMvUzX7-0',
    },
  },
};
