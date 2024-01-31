import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-credential-detail',
  styleUrl: 'd-credential-detail.css',
  shadow: true,
})
export class DCredentialDetail {
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) description: string;
  @Prop({ reflect: true }) issuer: string;
  @Prop({ reflect: true }) longDescription?: string;
  @Prop({ reflect: true }) href?: string;
  @Prop({ reflect: true }) logoSrc?: string;

  render() {
    return (
      <Host>
        <div>
          <div class="heading">
            <d-avatar name={this.name} src={this.logoSrc}></d-avatar>
            <span class="name">{this.name}</span>
          </div>
          <span class="description">{this.description}</span>
          <span class="long-description">{this.longDescription}</span>
          <span class="issuer">{this.issuer}</span>
          <div class="w-full">
          <slot></slot>
            <d-button color="accent" href={this.href}>
              generate qr
            </d-button>
          </div>
        </div>
      </Host>
    );
  }
}
