import { DLoading } from './d-loading';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/Atoms/Loading',
  render: () =>
    `<d-loading></d-loading>`,
} satisfies Meta<DLoading>;

export default meta;
type Story = StoryObj<DLoading>;

export const Default: Story = {};

