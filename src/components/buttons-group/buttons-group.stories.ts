import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';
import { ColorArgTypes } from '../types.js';

const meta = {
  title: 'Design System/FORMS/Buttons-group',
  render: () => `<d-buttons-group>
  <d-button href='/' size="large">
    button 1
		<ion-icon icon="person" slot="start" />
	</d-button>
  <d-button href='/' size="large">
		button 2
    <ion-icon icon="globe" slot="start" />
	</d-button>
  <d-button href='/' size="large">
		button 3
    <ion-icon icon="settings" slot="start" />
	</d-button>
  </d-buttons-group>`,
  argTypes: {
    disabled: { control: 'boolean', description: 'Disable the button' },
    color: ColorArgTypes,
  },
} satisfies Meta<Components.DButtonsGroup>;

export default meta;
type Story = StoryObj<Components.DButtonsGroup>;

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?node-id=3516-42412',
    },
  },
};
