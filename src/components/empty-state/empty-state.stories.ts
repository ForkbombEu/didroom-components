import { DEmptyState } from './d-empty-state';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/FEEDBACK & STATUS/EmptyState',
  render: (args, parameters) =>
    `<d-empty-state 
    heading="${args.heading}" 
    text="${args.text}"
	${args.buttonText && `button-text="${args.buttonText}"`}	
	${args.href && `href="${args.href}"`}
	${parameters.onClick ? `onButtonClick="${parameters.onClick}"` : ''}
    >
    <svg
						width="255"
						height="152"
						viewBox="0 0 255 152"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M114.035 5.30018L8.58937 75.0889C4.30582 77.9239 3.13259 83.6931 5.96888 87.9748L43.2436 144.245C46.0799 148.526 51.8517 149.699 56.1352 146.864L161.581 77.0754C165.864 74.2403 167.037 68.4711 164.201 64.1894L126.926 7.91952C124.09 3.63785 118.318 2.46513 114.035 5.30018Z"
							fill="var(--surface)"
						/>
						<path
							d="M114.035 5.30018L8.58937 75.0889C4.30582 77.9239 3.13259 83.6931 5.96888 87.9748L43.2436 144.245C46.0799 148.526 51.8517 149.699 56.1352 146.864L161.581 77.0754C165.864 74.2403 167.037 68.4711 164.201 64.1894L126.926 7.91952C124.09 3.63785 118.318 2.46513 114.035 5.30018Z"
							stroke="var(--on-alt)"
							stroke-width="1.5"
							stroke-miterlimit="10"
							stroke-dasharray="5 5"
						/>
						<path
							d="M101.61 41.9879L92.0199 113.296C91.3355 118.385 94.9083 123.065 100 123.748L232.805 141.563C237.897 142.246 242.58 138.674 243.264 133.585L252.854 62.2765C253.539 57.1871 249.966 52.5076 244.874 51.8246L112.069 34.0094C106.977 33.3264 102.295 36.8985 101.61 41.9879Z"
							fill="var(--primary)"
						/>
						<path
							d="M101.61 41.9879L92.0199 113.296C91.3355 118.385 94.9083 123.065 100 123.748L232.805 141.563C237.897 142.246 242.58 138.674 243.264 133.585L252.854 62.2765C253.539 57.1871 249.966 52.5076 244.874 51.8246L112.069 34.0094C106.977 33.3264 102.295 36.8985 101.61 41.9879Z"
							stroke="var(--on-alt)"
							stroke-width="1.5"
							stroke-miterlimit="10"
							stroke-dasharray="5 5"
						/>
						<path
							d="M189.204 89.3054L175.495 87.4644L177.337 73.7736L176.579 73.6687L174.738 87.3595L161.041 85.5185L160.936 86.2875L174.644 88.1169L172.802 101.819L173.56 101.913L175.402 88.2217L189.099 90.0627L189.204 89.3054Z"
							fill="var(--on-alt)"
							stroke="var(--on-alt)"
							stroke-width="1.5"
							stroke-miterlimit="10"
						/>
					</svg>
    </d-empty-state>
    `,
} satisfies Meta<DEmptyState>;

export default meta;
type Story = StoryObj<DEmptyState>;

export const Default: Story = {
  args: {
    heading: 'Nothing in your wallet',
    text: 'Start getting your first credential',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Uxc5APvp9BsY9r71rF8HhQ/DIDWallet-UI-Trial?node-id=100%3A1839&mode=dev',
    },
  },
};

export const WithButton: Story = {
  args: {
    heading: 'Nothing in your wallet',
    text: 'Start getting your first credential',
    buttonText: 'Go to home',
    href: '#',
  },
};

export const WithButtonEvent: Story = {
  args: { ...WithButton.args, href: undefined },
  parameters: {
    onClick: () => console.log('Click'),
  },
};
