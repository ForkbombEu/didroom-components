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
    const arrowBack = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Icon/outline/arrow-back">
          <path
            id="Vector"
            d="M7.37305 12.75L12.5423 17.9192C12.691 18.0679 12.7644 18.242 12.7625 18.4413C12.7606 18.6407 12.682 18.8179 12.5269 18.973C12.3718 19.1179 12.1962 19.1929 12 19.198C11.8039 19.2032 11.6282 19.1282 11.4731 18.973L5.13273 12.6327C5.03914 12.5391 4.97312 12.4404 4.93465 12.3365C4.89619 12.2327 4.87695 12.1205 4.87695 12C4.87695 11.8795 4.89619 11.7673 4.93465 11.6635C4.97312 11.5596 5.03914 11.4609 5.13273 11.3673L11.4731 5.02693C11.6116 4.88847 11.783 4.81763 11.9875 4.81443C12.192 4.81123 12.3718 4.88207 12.5269 5.02693C12.682 5.18205 12.7596 5.36025 12.7596 5.56153C12.7596 5.76282 12.682 5.94102 12.5269 6.09614L7.37305 11.25H18.75C18.9628 11.25 19.141 11.3218 19.2846 11.4654C19.4282 11.609 19.5 11.7872 19.5 12C19.5 12.2128 19.4282 12.391 19.2846 12.5346C19.141 12.6782 18.9628 12.75 18.75 12.75H7.37305Z"
            fill="currentColor"
          />
        </g>
      </svg>
    );

    const more = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Icon/outline/more">
          <path
            id="Vector"
            d="M6.23079 13.5C5.8183 13.5 5.46518 13.3531 5.17143 13.0594C4.8777 12.7656 4.73083 12.4125 4.73083 12C4.73083 11.5875 4.8777 11.2344 5.17143 10.9407C5.46518 10.6469 5.8183 10.5 6.23079 10.5C6.64329 10.5 6.9964 10.6469 7.29014 10.9407C7.58389 11.2344 7.73076 11.5875 7.73076 12C7.73076 12.4125 7.58389 12.7656 7.29014 13.0594C6.9964 13.3531 6.64329 13.5 6.23079 13.5ZM12 13.5C11.5875 13.5 11.2344 13.3531 10.9407 13.0594C10.6469 12.7656 10.5 12.4125 10.5 12C10.5 11.5875 10.6469 11.2344 10.9407 10.9407C11.2344 10.6469 11.5875 10.5 12 10.5C12.4125 10.5 12.7656 10.6469 13.0594 10.9407C13.3531 11.2344 13.5 11.5875 13.5 12C13.5 12.4125 13.3531 12.7656 13.0594 13.0594C12.7656 13.3531 12.4125 13.5 12 13.5ZM17.7692 13.5C17.3567 13.5 17.0036 13.3531 16.7099 13.0594C16.4161 12.7656 16.2693 12.4125 16.2693 12C16.2693 11.5875 16.4161 11.2344 16.7099 10.9407C17.0036 10.6469 17.3567 10.5 17.7692 10.5C18.1817 10.5 18.5348 10.6469 18.8286 10.9407C19.1223 11.2344 19.2692 11.5875 19.2692 12C19.2692 12.4125 19.1223 12.7656 18.8286 13.0594C18.5348 13.3531 18.1817 13.5 17.7692 13.5Z"
            fill="currentColor"
          />
        </g>
      </svg>
    );

    return (
      <Host>
        <div>
          <ion-header class="shadow-none" translucent>
            <ion-toolbar>
              {this.backButton && (
                <ion-buttons slot="start">
                  <ion-button onClick={() => window.history.back()} aria-hidden>
                    <div class="w-6 h-6 text-on" slot="icon-only">
                      {arrowBack}
                    </div>
                  </ion-button>
                </ion-buttons>
              )}
              <ion-title class="text-center">
                <slot />
              </ion-title>
              {this.settings && (
                <ion-buttons slot="end">
                  <ion-button onClick={openSettings} aria-hidden>
                    <div class="w-6 h-6 text-on">{more}</div>
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
              <slot name="settings"></slot>
            </ion-content>
          </ion-modal>
        </div>
      </Host>
    );
  }
}
