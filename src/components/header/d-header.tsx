import { Component, Host, Prop, State, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'd-header',
  styleUrl: 'd-header.css',
  shadow: true,
})
export class DHeader {
  @Prop() backButton: boolean = false;
  @Prop() settings: boolean = false;
  @Prop() settingsTitle: string = 'Settings';
  @State() isSettingsOpen: boolean = false;
  @Event() backButtonClick: EventEmitter<void>;

  render() {
    return (
      <Host>
        <div>
          <ion-header class="shadow-none" translucent>
            <ion-toolbar>
              {this.backButton && (
                <ion-buttons slot="start">
                  <ion-button onClick={() => this.backButtonClick.emit()}>
                    <div class="w-6 h-6 text-on" slot="icon-only">
                      <d-icon icon="arrow-back" outline aria-label="back" />
                    </div>
                  </ion-button>
                </ion-buttons>
              )}
              <ion-title class="text-center uppercase bg-surface">
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
                  <ion-menu-toggle class="h-12 w-12">
                    <ion-button class="h-full w-full">
                      <div class="w-8 h-8 text-on flex justify-center items-center">
                        <d-icon icon="settings" outline aria-label="settings"/>
                      </div>
                    </ion-button>
                  </ion-menu-toggle>
                </ion-buttons>
              )}
            </ion-toolbar>
          </ion-header>
          {this.settings && (
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
          )}
        </div>
      </Host>
    );
  }
}
