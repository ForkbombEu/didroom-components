import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-app-details',
  styleUrl: 'd-app-details.css',
  shadow: true,
})
export class DAppDetails {
  @Prop() version: string;
  @Prop() developedBy: string = 'Developed by Forkbomb BV';

  render() {
    return (
      <Host>
        <div class="flex flex-col items-center gap-2 p-6">
          <d-text size="l">{this.developedBy}</d-text>
          <d-text size="m">v {this.version}</d-text>
        </div>
      </Host>
    );
  }
}
