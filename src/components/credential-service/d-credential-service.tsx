import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-credential-service',
  styleUrl: 'd-credential-service.css',
  shadow: true,
})
export class DCredentialService {
  @Prop() name: string;
  @Prop() issuer: string;
  @Prop({attribute:"logo-src"}) logoSrc?: string;
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
            <d-icon icon="arrow-forward" outline/>
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
