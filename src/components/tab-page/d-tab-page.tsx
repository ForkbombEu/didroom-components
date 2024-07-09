import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-tab-page',
  styleUrl: 'd-tab-page.css',
  shadow: false,
})
export class DTabPage {
  @Prop() tab: string;
  @Prop() title: string;
  @Prop() settings: boolean = false;
  @Prop() scanButtonText: string | undefined = undefined;
  @Prop() scanButtonHref: string | undefined = undefined;

  render() {
    return (
      <Host>
        <div class="ion-page">
          <d-header backButton={false} settings={this.settings}>
            {this.title}
            <slot name="settings" slot="settings"></slot>
          </d-header>
          <ion-content fullscreen class="ion-padding" id="main-content">
            <slot />
            {this.scanButtonText && <d-scan-button href={this.scanButtonHref}>{this.scanButtonText}</d-scan-button>}
            <div class="pb-24" />
          </ion-content>
        </div>
      </Host>
    );
  }
}
