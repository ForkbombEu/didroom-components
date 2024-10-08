import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-verification-card',
  styleUrl: 'd-verification-card.css',
  shadow: true,
})
export class DVerificationCard {
  @Prop() selected: boolean = false;
  @Prop({ reflect: true }) relyingParty: string;
  @Prop({ reflect: true }) verifier: string;
  @Prop({ reflect: true }) flow: string;
  @Prop({ reflect: true }) logo: string;

  render() {
    return (
      <Host>
        <div class={{ 'w-full rounded-lg p-5 flex gap-3 bg-primary no-underline items-start': true, 'border border-success': this.selected }}>
          <d-vertical-stack class="w-full">
            <d-horizontal-stack class="justify-between items-start w-full">
              <d-avatar name={this.verifier} size="l" shape="square" src={this.logo}></d-avatar>
              <div class={{ 'rounded-full h-6 w-6': true, 'bg-success': this.selected, 'border border-accent': !this.selected }}>
                {this.selected && <d-icon icon="check" outline size={22} />}
              </div>
            </d-horizontal-stack>
            <d-vertical-stack class="w-full" gap={0}>
              <d-text size="l">{this.flow}</d-text>
              <d-text size="s" class="text-on-alt">
                {this.relyingParty}
              </d-text>
              <d-text size="xs" class="text-on-alt">
                {this.verifier}
              </d-text>
            </d-vertical-stack>
            <d-vertical-stack class="w-full" gap={0}>
              <slot></slot>
            </d-vertical-stack>
          </d-vertical-stack>
        </div>
      </Host>
    );
  }
}
