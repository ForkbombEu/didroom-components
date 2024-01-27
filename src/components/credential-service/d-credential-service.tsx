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
  @Prop() href?: string;

  render() {
    const content = (
      <div>
        <d-avatar name={this.name} src={this.logoSrc} size="l"></d-avatar>
        <div class="grow truncate">
          <span class="name">{this.name}</span>
          <span class="description">{this.description}</span>
          <span class="issuer">{this.issuer}</span>
        </div>
        {this.href && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M3 12L21 12M21 12L12.5 20.5M21 12L12.5 3.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
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
