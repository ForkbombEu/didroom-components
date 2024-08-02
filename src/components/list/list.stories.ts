import { DList } from './d-list';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/Atoms/List',
  render: args =>
    `<d-list ${args.gap && `gap=${args.gap}`}>
    <d-credential-service name="credential 1" issuer="issuer 1"  organization="org 1"></d-credential-service>
    <d-credential-service name="credential 2" issuer="issuer 2"  organization="org 2"></d-credential-service>
    <d-credential-service name="credential 3" issuer="issuer 3"  organization="org 3"></d-credential-service>
    </d-list>`,
} satisfies Meta<DList>;

export default meta;
type Story = StoryObj<DList>;

export const Default: Story = {
  args: {},
};

export const WithGap4: Story = {
  args: {
    gap: 4,
  },
};

export const WithGap8: Story = {
  args: {
    gap: 8,
  },
};
