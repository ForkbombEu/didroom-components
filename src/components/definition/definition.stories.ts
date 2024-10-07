import { DDefinition } from './d-definition';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/DATA DISPLAY/Definition',
  render: args =>
    `<d-definition 
    title="${args.title}" 
    definition="${args.definition}"
    ${args.hidable && 'hidable'}
    ${args.dotted && 'dotted'}
    >
    </d-definition>
    <d-definition 
    title="${args.title}" 
    definition="${args.definition}"
    ${args.hidable && 'hidable'}
    ${args.dotted && 'dotted'}

    >
    </d-definition>
    <d-definition 
    title="${args.title}" 
    definition="${args.definition}"
    ${args.hidable && 'hidable'}
    ${args.dotted && 'dotted'}
    >
    </d-definition>
    `,
} satisfies Meta<DDefinition>;

export default meta;
type Story = StoryObj<DDefinition>;

export const Default: Story = {
  args: {
    title: 'issuer:',
    definition: 'Italian Governament',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Uxc5APvp9BsY9r71rF8HhQ/DIDWallet-UI-Trial?node-id=100%3A1839&mode=dev',
    },
  },
};

export const Hidable: Story = {
  args: {
    ...Default.args,
    hidable: true,
  },
};

export const Dotted: Story = {
  args: {
    ...Default.args,
    dotted: true,
  },
};
