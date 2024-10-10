import { DActivityCard } from './d-activity-card';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/FEEDBACK & STATUS/Activity',
  render: args =>
    `<d-activity-card
      name="${args.name}" 
      logo="${args.logo}" 
      description="${args.description}" 
      date="${args.date}" 
    ${args.message && `message="${args.message}"`}
    ${args.read && `read="${args.read}"`}
    >
      <d-button size="small" color="accent">
        action 1
      </d-button>
      <d-button size="small" color="primary">
        action 2
      </d-button> 
    </d-activity-card>`,
} satisfies Meta<DActivityCard>;

export default meta;
type Story = StoryObj<DActivityCard>;

export const Default: Story = {
  args: {
    name: 'Proof of humanity is expired',
    logo: `https://api.dicebear.com/7.x/open-peeps/svg?seed=${new Date()}`,
    message: 'Proof of humanity is expired',
    description: 'Your proof of humanity has expired. Please renew it if you need it.',
    date: '1 day ago',
  },
};

export const Read: Story = {
  args: {
    ...Default.args,
    read: true,
  },
};
