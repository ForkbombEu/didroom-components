import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-credential-service',
  styleUrl: 'd-credential-service.css',
  shadow: true,
})
export class DCredentialService {
  @Prop() name: string;
  @Prop() issuer: string;
  @Prop() logoSrc?: string;
  @Prop() organization?: string;
  @Prop() description?: string;
  @Prop({ reflect: true }) href?: string;

  render() {
    const content = (
      <div class="w-full rounded-lg p-5 flex gap-3 bg-primary no-underline items-center">
        <div class="flex flex-grow items-start gap-3">
          <d-avatar name={this.name} src={this.logoSrc} size="l" shape="square"></d-avatar>
          <div class="h-full min-h-[60px] flex flex-col grow justify-between">
            <d-text size="l">{this.name}</d-text>
            <d-text size="s"  class="!text-on-alt">{this.organization}</d-text>
            <d-text class="!text-on-alt">{this.issuer}</d-text>
          </div>
        </div>
        {this.href && (
          <div class="shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="w-6 h-6 fill-current stroke-on">
              <path d="M3 12L21 12M21 12L12.5 20.5M21 12L12.5 3.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        )}
      </div>
    );

    if (this.href) {
      return (
        <Host>
          <a href={this.href}>{content}</a>
        </Host>
      );
    } else {
      return <Host>{content}</Host>;
    }
  }
}
