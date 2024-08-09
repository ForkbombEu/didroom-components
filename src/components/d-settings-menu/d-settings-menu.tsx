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

  render() {
    return (
      <Host>
        {/* <div class="flex flex-col justify-between">
          <div class="flex flex-col gap-4">
            <d-buttons-group>
              <d-button aria-hidden size="large" disabled>
                {this.accountSettings}
                <ion-icon icon={personOutline} slot="start" />
              </d-button>
              <d-button href="/" size="large" disabled>
                {this.securityAndAuthentication}
                <ion-icon icon={lockClosedOutline} slot="start" />
              </d-button>
              <d-button onClick={openAppSettings} aria-hidden size="large">
                {this.notificationsSettings}
                <ion-icon icon={notificationsOutline} slot="start" />
              </d-button>
              <d-button onClick={gotoLanguageSettings} aria-hidden size="large">
                {this.languages}
                <ion-icon icon={globeOutline} slot="start" />
              </d-button>
            </d-buttons-group>
            <d-buttons-group>
              <d-button href="https://didroom.com/guides/1_orgadmin/support.html" size="large">
                {this.support}
                <ion-icon icon={helpCircleOutline} slot="start" />
              </d-button>
              <d-button href="https://didroom.com/guides/2_wallet/5_privacy-policy.html" size="large">
                {this.privacyPolicy}
                <ion-icon icon={shieldOutline} slot="start" />
              </d-button>
            </d-buttons-group>
            <d-buttons-group>
              <d-button onClick={logout} aria-hidden size="large">
                {this.logOut}
                <ion-icon icon={logOutOutline} slot="start" />
              </d-button>
            </d-buttons-group>
          </div>
          <d-app-details developedBy={this.developedBy} version={this.version} />
        </div> */}
      </Host>
    );
  }
}
