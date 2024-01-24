import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-credential-service',
  styleUrl: 'd-credential-service.css',
  shadow: true,
})
export class DCredentialService {
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) issuer: string;
  @Prop({ reflect: true }) logoSrc?: string;
  @Prop({ reflect: true }) description?: string;
  @Prop({ reflect: true }) href?: string;

  render() {
    const content = (
      <div>
        <d-avatar name={this.name} src={this.logoSrc}></d-avatar>
        <div class="info">
          <span class="name">{this.name}</span>
          <span class="issuer">{this.issuer}</span>
          <span class="description">{this.description}</span>
        </div>
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
