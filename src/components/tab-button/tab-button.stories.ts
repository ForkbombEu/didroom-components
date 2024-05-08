import { DTabButton } from './d-tab-button';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/Molecule/TabButton',
  render: args =>
    `<d-tab-button 
    tab="${args.tab}"
    active="${args.active}">
    ${args.tab}
    </d-tab-button>`,
} satisfies Meta<DTabButton>;

export default meta;
type Story = StoryObj<DTabButton>;

export const Default: Story = {
  args: {
    tab: 'home',
    active:false
  },
};

export const Home: Story = {
  args: {
    ...Default.args,
  },
};

export const HomeActive: Story = {
  args: {
    ...Home.args,
    active: true,
  },
};

export const Wallet: Story = {
  args: {
    tab: 'wallet',
    active: false
  },
};

export const WalletActive: Story = {
  args: {
    ...Wallet.args,
    active: true,
  },
};

export const Profile: Story = {
  args: {
    tab: 'profile',
    active: false
  },
};

export const ProfileActive: Story = {
  args: {
    ...Profile.args,
    active: true,
  },
};

export const Activity: Story = {
  args: {
    tab: 'activity',
    active: false
  },
};

export const ActivityActive: Story = {
  args: {
    ...Activity.args,
    active: true,
  },
};