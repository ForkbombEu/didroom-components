import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-credential-offer',
  styleUrl: 'd-credential-offer.css',
  shadow: true,
})
export class DCredentialOffer {
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) issuer: string;
  @Prop({ reflect: true }) logoSrc?: string;
  @Prop({ reflect: true }) description?: string;
  @Prop({ reflect: true }) longDescription?: string;
  render() {
    return (
      <Host>
        <div class="frame">
          <div class="heading">
            <d-avatar name={this.name} src={this.logoSrc}></d-avatar>
            <span class="name">{this.name}</span>
          </div>
          <div class="info">
            <span class="short-description">{this.description}</span>
            <div class="details">
              <span class="long-description">{this.longDescription}</span>
            </div>
          </div>
          <dl class="list">
            <slot/>
            <d-definition title="Holder name" definition="Karla John" hidable/>
            <d-definition title="Holder DID" definition="VxRbAYUkAnsJtVsu9F4grJOW88sios45w" hidable/>
            <d-definition title="issuer" definition="Italian Governament" />
            <d-definition title="issuer DID" definition="DxNbADPkQnsJuTsu7E4orFYT175sios3Ku" hidable/>
          </dl>
        </div>
      </Host>
    );
  }
}
