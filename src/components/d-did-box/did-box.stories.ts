import { DDidBox } from './d-did-box';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/DATA DISPLAY/DidBox',
  render: args =>
    `<d-did-box 
    did="${args.did}" 
    </d-did-box>`,
} satisfies Meta<DDidBox>;

export default meta;
type Story = StoryObj<DDidBox>;

export const Default: Story = {
  args: {
    did: 'did:dyne:sandbox.signroom:JAomV7KF3NjjagBEnTrRNG28DjepXM9XHEyGNYwJS7ke',
  },
};
