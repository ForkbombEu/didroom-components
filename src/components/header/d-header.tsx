import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'd-header',
  styleUrl: 'd-header.css',
  shadow: true,
})
export class DHeader {
  @Prop() backButton: boolean = false;
  @Prop() settings: boolean = false;
  @Prop() settingsTitle: string = 'Settings';
  @Prop() backFunction: () => void = window.history.back;
  @State() isSettingsOpen: boolean = false;

  render() {
    return (
      <Host>
        <div>
          <ion-header class="shadow-none" translucent>
            <ion-toolbar>
              {this.backButton && (
                <ion-buttons slot="start">
                  <ion-button onClick={this.backFunction} aria-hidden>
                    <div class="w-6 h-6 text-on" slot="icon-only">
                      <d-icon icon="arrow-back" outline />
                    </div>
                  </ion-button>
                </ion-buttons>
              )}
              <ion-title class="text-center uppercase">
                <span
                  class={{
                    'pl-12': this.settings,
                    'pr-14': this.backButton,
                  }}
                >
                  <slot />
                </span>
              </ion-title>
              {this.settings && (
                <ion-buttons slot="end">
                  <ion-menu-toggle>
                    <ion-button>
                      <div class="w-6 h-6 text-on">
                        <d-icon icon="settings" outline />;
                      </div>
                    </ion-button>
                  </ion-menu-toggle>
                </ion-buttons>
              )}
            </ion-toolbar>
          </ion-header>
          <ion-menu content-id="main-content">
            <ion-header>
              <ion-toolbar>
                <ion-title>{this.settingsTitle}</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content>
              <div class="px-4 py-2">
                <slot name="settings"></slot>
              </div>
            </ion-content>
          </ion-menu>
        </div>
      </Host>
    );
  }
}
