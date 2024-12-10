import { Component, Host, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'd-settings-menu',
  styleUrl: 'd-settings-menu.css',
  shadow: true,
})
export class DSettingsMenu {
  @Prop({ attribute: 'account-settings' }) accountSettings: string;
  @Prop({ attribute: 'notifications-settings' }) notificationsSettings: string;
  @Prop() languages: string;
  @Prop() support: string;
  @Prop({ attribute: 'privacy-policy' }) privacyPolicy: string;
  @Prop({ attribute: 'log-out' }) logOut: string;
  @Prop() version: string;
  @Prop({ attribute: 'developed-by' }) developedBy: string;
  @Event() accountSettingsClick: EventEmitter<void>;
  @Event() languageSettingsClick: EventEmitter<void>;
  @Event() appSettingsClick: EventEmitter<void>;
  @Event() logoutClick: EventEmitter<void>;

  render() {
    return (
      <Host>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col gap-4">
            <d-buttons-group>
              <d-button aria-hidden size="large" onClick={()=>this.accountSettingsClick.emit()}>
                {this.accountSettings}
                <d-icon icon="profile" slot="start" outline />
              </d-button>
              <d-button onClick={()=>this.appSettingsClick.emit()} aria-hidden size="large">
                {this.notificationsSettings}
                <d-icon icon="notification" slot="start" outline />
              </d-button>
              <d-button onClick={()=>this.languageSettingsClick.emit()} aria-hidden size="large">
                {this.languages}
                <d-icon icon="language" slot="start" outline />
              </d-button>
            </d-buttons-group>
            <d-buttons-group>
              <d-button href="https://didroom.com/guides/Orgadmin/support.html" size="large">
                {this.support}
                <d-icon icon="help" slot="start" outline />
              </d-button>
              <d-button href="https://didroom.com/guides/Terms-and-conditions/privacy-policy.html" size="large">
                {this.privacyPolicy}
                <d-icon icon="shield" slot="start" outline />
              </d-button>
            </d-buttons-group>
            <d-buttons-group>
              <d-button onClick={()=>this.logoutClick.emit()} aria-hidden size="large">
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
