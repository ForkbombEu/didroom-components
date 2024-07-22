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
  @Prop() description?: string;
  @Prop() issuerLabel?: string = 'Issuer';
  @Prop({ reflect: true }) href?: string;

  render() {
    const content = (
      <div class="w-full rounded-lg p-5 flex flex-col bg-primary no-underline gap-3">
        <d-text size="xl" class="font-medium">{this.name}</d-text>
        <div class="flex gap-5 items-start">
          <d-avatar name={this.name} src={this.logoSrc} size="l" shape="square"></d-avatar>
          <div class="flex flex-col grow">
            <d-text size="s" class="line-clamp-4">
              {this.description}
            </d-text>
          </div>
        </div>
        <d-text size="s" class="font-semibold">
          {this.issuerLabel}: {this.issuer}
        </d-text>
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
