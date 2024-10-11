import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-qr-code',
  styleUrl: 'd-qr-code.css',
  shadow: true,
})
export class DQrCode {
  @Prop() qr: string;
  @Prop() sessionIdLabel: string = 'Session ID:';
  @Prop() sessionId: string;
  @Prop() generationDate: string;
  @Prop() generationHour: string;

  render() {
    return (
      <Host>
        <div class="flex flex-col items-center justify-center rounded-lg bg-primary p-4">
          <div class="w-full pb-2">
            <img src={this.qr} alt="qrCode" class="w-full" />
          </div>

          <d-text size="l" class="w-max">
            {this.sessionIdLabel}
          </d-text>
          <d-heading size="s">{this.sessionId}</d-heading>
          <d-text size="m">{this.generationDate}</d-text>
          <d-text size="m">{this.generationHour}</d-text>
        </div>
      </Host>
    );
  }
}
