import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-settings-menu',
  styleUrl: 'd-settings-menu.css',
  shadow: true,
})
export class DSettingsMenu {
  @Prop() accountSettings: string;
  @Prop() securityAndAuthentication: string;
  @Prop() notificationsSettings: string;
  @Prop() languages: string;
  @Prop() support: string;
  @Prop() privacyPolicy: string;
  @Prop() logOut: string;
  @Prop() version: string;
  @Prop() developedBy: string;
  @Prop() logoutCB: () => void;
  @Prop() gotoLanguageSettings: () => void;
  @Prop() openAppSettings: () => void;

  render() {
    return (
      <Host>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col gap-4">
            <d-buttons-group>
              <d-button aria-hidden size="large" disabled>
                {this.accountSettings}
                <d-icon icon="profile" slot="start" outline />
              </d-button>
              <d-button href="/" size="large" disabled>
                {this.securityAndAuthentication}
                <d-icon icon="lock" slot="start" outline />
              </d-button>
              <d-button onClick={this.openAppSettings} aria-hidden size="large">
                {this.notificationsSettings}
                <d-icon icon="notification" slot="start" outline />
              </d-button>
              <d-button onClick={this.gotoLanguageSettings} aria-hidden size="large">
                {this.languages}
                <d-icon icon="language" slot="start" outline />
              </d-button>
            </d-buttons-group>
            <d-buttons-group>
              <d-button href="https://didroom.com/guides/1_orgadmin/support.html" size="large">
                {this.support}
                <d-icon icon="help" slot="start" outline />
              </d-button>
              <d-button href="https://didroom.com/guides/2_wallet/5_privacy-policy.html" size="large">
                {this.privacyPolicy}
                <d-icon icon="shield" slot="start" outline />
              </d-button>
            </d-buttons-group>
            <d-buttons-group>
              <d-button onClick={this.logoutCB} aria-hidden size="large">
                {this.logOut}
                <d-icon icon="logout" outline slot="start" />
              </d-button>
            </d-buttons-group>
          </div>
          <d-app-details developedBy={this.developedBy} version={this.version} />
        </div>
      </Host>
    );
  }
}
