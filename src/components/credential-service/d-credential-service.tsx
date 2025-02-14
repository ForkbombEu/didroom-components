import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-credential-service',
  styleUrl: 'd-credential-service.css',
  shadow: true,
})
export class DCredentialService {
  @Prop() name: string;
  @Prop() issuer: string;
  @Prop({ attribute: 'logo-src' }) logoSrc?: string;
  @Prop() organization?: string;
  @Prop({ reflect: true }) href?: string;


  render() {
    return (
      <Host>
        <d-list-item
          name={this.name}
          issuer={this.issuer}
          logo-src={this.logoSrc}
          href={this.href}
          background
        >
          <div slot="organization">
            <d-text size="s" class="!text-on-alt">
            {this.organization}
            </d-text>
          </div>
        </d-list-item>
      </Host>
    );
  }
}
