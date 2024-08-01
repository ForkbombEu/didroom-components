import { DList } from './d-list';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/Atoms/List',
  render: () =>
    `<d-list>
    <d-credential-service name="credential 1" issuer="issuer 1"  organization="org 1"></d-credential-service>
    <d-credential-service name="credential 2" issuer="issuer 2"  organization="org 2"></d-credential-service>
    <d-credential-service name="credential 3" issuer="issuer 3"  organization="org 3"></d-credential-service>
    </d-list>`,
} satisfies Meta<DList>;

export default meta;
type Story = StoryObj<DList>;

export const Default: Story = {
};

