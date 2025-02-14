import { DActivityCard } from './d-activity-card';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/DATA DISPLAY/Activity',
  render: args =>
    `<d-vertical-stack separator> <d-activity-card
      message="${args.message}" 
      logo="${args.logo}" 
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
    </d-activity-card>
    <d-activity-card
      message="${args.message}"
      logo="${args.logo}" 
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
    </d-activity-card>
    </d-vertical-stack>`,
} satisfies Meta<DActivityCard>;

export default meta;
type Story = StoryObj<DActivityCard>;

export const Default: Story = {
  args: {
    logo: `https://api.dicebear.com/7.x/open-peeps/svg?seed=${new Date()}`,
    message: 'Proof of humanity is expired',
    date: '1 day ago',
  },
};

export const Read: Story = {
  args: {
    ...Default.args,
    read: true,
  },
};
