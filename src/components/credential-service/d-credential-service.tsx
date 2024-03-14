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
  @Prop({ reflect: true }) href?: string;

  render() {
    const content = (
      <div>
        <d-avatar name={this.name} src={this.logoSrc} size="l"></d-avatar>
        <div class="flex flex-col grow">
          <d-text size="l">{this.name}</d-text>
          <d-text size="s">{this.description}</d-text>
          <d-text size="xs">{this.issuer}</d-text>
        </div>
        {this.href && (
          <div class="shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
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
