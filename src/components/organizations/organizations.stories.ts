import { DOrganizations } from './d-organizations';
import { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Design System/DATA DISPLAY/Organizations',
  render: args =>
    `<d-organizations 
    heading="${args.heading}">
    <d-avatar alt="Test didroom flow" size="xl" shape="round" src="https://admin.didroom.com/api/files/aako88kt3br4npt/41ns8uk7jo2n5l7/test_9aIWfYm3RD.webp" class="hydrated"></d-avatar>
    <d-avatar alt="Didroom" size="xl" shape="round" src="https://admin.didroom.com/api/files/aako88kt3br4npt/6snnqkixx6eszue/property_1_default_iRzoiR096R.png" class="hydrated"></d-avatar>
    <d-avatar alt="Pirate's organization" size="xl" shape="round" src="https://admin.didroom.com/api/files/aako88kt3br4npt/pyehb0lzjfws88i/rune3_cap4_1_ikjaXVCMMd.png" class="hydrated"></d-avatar>
    <d-avatar alt="Foundamick" size="xl" shape="round" src="https://admin.didroom.com/api/files/aako88kt3br4npt/ioyqa5sjn2o9xut/screenshot_2023_10_12_alle_18_53_32_km4Wsu4ggw.png" class="hydrated"></d-avatar>
    </d-organizations>`,
} satisfies Meta<DOrganizations>;

export default meta;
type Story = StoryObj<DOrganizations>;

export const Default: Story = {
  args: {
    heading: 'Badges',
  },
};
