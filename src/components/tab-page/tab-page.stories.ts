import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';

const meta = {
  title: 'Design System/NAVIGATION/TabPage',
  render: args => `
  <ion-tabs>
  <d-tab-page
    tab="${args.tab}"
    title="${args.title}"
    settings=${args.settings}
    ${args.scanButtonText ? `scan-button-text="${args.scanButtonText}"` : ''}
    scan-button-href="${args.scanButtonHref}"
  >
    <div slot="settings" class="flex flex-col gap-4 ion-padding">
        <d-buttons-group>
            <d-button size="large" disabled>
                Account settings
            </d-button>
            <d-button size="large" disabled>
                Security and authentications
            </d-button>
            <d-button size="large">
                notification settings
            </d-button>
            <d-button
                size="large"
            >
                languages
            </d-button>
        </d-buttons-group>
    </div>  
  </d-tab-page>
  <ion-tab-bar slot="bottom" class="ion-padding flex justify-between py-0">
		
			<d-tab-button
				tab="${args.tab}"
				aria-hidden
				active
			>
				home
			</d-tab-button>
	</ion-tab-bar>
  </ion-tabs>

  `,
} satisfies Meta<Components.DTabPage>;

export default meta;
type Story = StoryObj<Components.DTabPage>;

export const Default: Story = {
  args: {
    tab: 'home',
    title: 'Title',
    settings: false,
    scanButtonText: 'Scan',
    scanButtonHref: 'https://www.google.com',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/pdwfO3dMKtaCAQakht0JE6/DIDRoom-%2B-Signroom---WF-and-GUI---Dyne.org?node-id=3825-34382',
    },
  },
};

export const WithSettings: Story = {
  args: {
    ...Default.args,
    settings: true,
  },
};

export const WithoutScanButton: Story = {
  args: {
    ...Default.args,
    scanButtonText: undefined,
    scanButtonHref: undefined,
  },
};
