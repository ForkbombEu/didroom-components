import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'd-header',
  styleUrl: 'd-header.css',
  shadow: true,
})
export class DHeader {
  @Prop() backButton: boolean = false;
  @Prop() settings: boolean = false;
  @State() isSettingsOpen: boolean = false;

  render() {
    const openSettings = () => {
      this.isSettingsOpen = !this.isSettingsOpen;
    };

    return (
      <Host>
        <div>
          <ion-header class="shadow-none" translucent>
            <ion-toolbar>
              {this.backButton && (
                <ion-buttons slot="start">
                  <ion-button onClick={() => window.history.back()} aria-hidden>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                  </ion-button>
                </ion-buttons>
              )}
              <ion-title class="text-center"><slot/></ion-title>
              {this.settings && (
                <ion-buttons slot="end">
                  <ion-button onClick={openSettings} aria-hidden>
                    <ion-icon icon="ellipsis-horizontal" slot="icon-only"></ion-icon>
                  </ion-button>
                </ion-buttons>
              )}
            </ion-toolbar>
          </ion-header>
          <ion-modal is-open={this.isSettingsOpen}>
            <ion-header>
              <ion-toolbar>
                <ion-title>
                  <d-heading size="s"> Settings </d-heading>
                </ion-title>
                <ion-buttons slot="end">
                  <ion-button onClick={openSettings} aria-hidden>
                    Close
                  </ion-button>
                </ion-buttons>
              </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
              <slot name='settings'></slot>
            </ion-content>
          </ion-modal>
        </div>
      </Host>
    );
  }
}
