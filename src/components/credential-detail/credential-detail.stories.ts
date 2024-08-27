import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';

const meta = {
  title: 'Design System/DATA DISPLAY/CredentialDetail',
  render: (args, story) =>
    Boolean(story.parameters.slot)
      ? `<d-credential-detail name="${args.name}" issuer="${args.issuer}" description="${args.description}" ${
          args.longDescription && `long-description="${args.longDescription}"`
        }}>${story.parameters.slot}</d-credential-detail>`
      : `<d-credential-detail name="${args.name}" issuer="${args.issuer}" description="${args.description}" ${
          args.longDescription && `long-description="${args.longDescription}"`
        }}></d-credential-detail>`,
} satisfies Meta<Components.DCredentialDetail>;

export default meta;
type Story = StoryObj<Components.DCredentialDetail>;

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

export const WithLongDescription: Story = {
  args: {
    ...Default.args,
    longDescription:
      'Service description (optional). Lorem ipsum dolor sit amet consectetur. Leo ultricies pellentesque morbi in eu metus commodo felis. Pellentesque facilisis a auctor enim lectus. Nulla dolor cras viverra massa.',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?type=design&node-id=2005-930&mode=design&t=uW8kvn2nKPMvUzX7-0',
    },
  },
};

export const WithList: Story = {
  args: {
    ...Default.args,
    longDescription:
      'Service description (optional). Lorem ipsum dolor sit amet consectetur. Leo ultricies pellentesque morbi in eu metus commodo felis. Pellentesque facilisis a auctor enim lectus. Nulla dolor cras viverra massa.',
  },
  parameters: {
    slot: `<d-definition title="Holder name" definition="Karla John" hidable></d-definition>
    <d-definition title="Holder DID" definition="VxRbAYUkAnsJtVsu9F4grJOW88sios45w" hidable></d-definition>
          <d-definition title="issuer" definition="Italian Governament" ></d-definition>
          <d-definition title="issuer DID" definition="DxNbADPkQnsJuTsu7E4orFYT175sios3Ku" hidable></d-definition>
          `,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?type=design&node-id=2005-930&mode=design&t=uW8kvn2nKPMvUzX7-0',
    },
  },
};

export const WithButton: Story = {
  args: {
    ...Default.args,
    longDescription: undefined,
  },
  parameters: {
    slot: `<d-button color="accent" href="/generate-qr">
              generate qr
            </d-button>`,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?type=design&node-id=2005-930&mode=design&t=uW8kvn2nKPMvUzX7-0',
    },
  },
};
