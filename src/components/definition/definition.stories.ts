import { DDefinition } from './d-definition';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/Atoms/Definition',
  render: args =>
    `<d-definition 
    title="${args.title}" 
    definition="${args.definition}" 
    </d-definition>`,
} satisfies Meta<DDefinition>;

export default meta;
type Story = StoryObj<DDefinition>;

export const Default: Story = {
  args: {
    title: 'issuer:',
    definition: 'Italian Governament',
  },
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: '',
    // },
  },
};
