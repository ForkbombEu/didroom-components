import { Meta, StoryObj } from '@storybook/html';
import type { Components } from '../../components.js';

const meta = {
  title: 'Design System/Molecule/SettingsMenu',
  render: args => `<d-settings-menu 
  account-settings="${args.accountSettings}"
    security-and-authentication="${args.securityAndAuthentication}"
    notifications-settings="${args.notificationsSettings}"
    languages="${args.languages}"
    support="${args.support}"
    privacy-policy="${args.privacyPolicy}"
    log-out="${args.logOut}"
    version="${args.version}"
    developed-by="${args.developedBy}"
    logoutCB="${args.logoutCB}"
    gotoLanguageSettings="${args.gotoLanguageSettings}"
    openAppSettings="${args.openAppSettings}"
  ></d-settings-menu>`,
} satisfies Meta<Components.DSettingsMenu>;

export default meta;
type Story = StoryObj<Components.DSettingsMenu>;

export const Default: Story = {
  args: {
    accountSettings: 'Account settings',
    securityAndAuthentication: 'Security and authentication',
    notificationsSettings: 'Notifications settings',
    languages: 'Languages',
    support: 'Support',
    privacyPolicy: 'Privacy policy',
    logOut: 'Log out',
    version: 'Version',
    developedBy: 'Developed by',
    logoutCB: () => {},
    gotoLanguageSettings: () => {},
    openAppSettings: () => {},
  },
};
