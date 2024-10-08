import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';

const meta = {
  title: 'Design System/DATA DISPLAY/SessionCard',
  render: args => `<d-session-card 
  sid='${args.sid}' 
  date='${args.date}' 
  success=${args.success}
  ${args.sessionMessage ? `session-message='${args.sessionMessage}'` : ''}
  ${args.verifiedMessage ? `verified-message='${args.verifiedMessage}'` : ''}
  ${args.failureMessage ? `failure-message='${args.failureMessage}'` : ''}
  ${args.inProgressMessage ? `in-progress-message='${args.inProgressMessage}'` : ''}
  ${args.inProgress ? `in-progress` : ''}
  ></d-session-card>`,
} satisfies Meta<Components.DSessionCard>;

export default meta;
type Story = StoryObj<Components.DSessionCard>;

export const Default: Story = {
  args: {
    sid: '27ype',
    date: '02/12/2020, 14:05:05',
    success: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?node-id=3825-34382',
    },
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    success: true,
  },
};

export const Translated: Story = {
  args: {
    ...Success.args,
    sessionMessage: 'セッションID:',
    verifiedMessage: '検証済み。',
    failureMessage: '失敗。',
  },
};

export const InProgress: Story = {
  args: {
    ...Default.args,
    success: false,
    inProgress: true,
  },
};
