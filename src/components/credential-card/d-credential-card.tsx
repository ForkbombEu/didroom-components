import { Component, Host, Prop, h } from '@stencil/core';

const verifiedUser = (
  <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="ic:round-verified-user" clip-path="url(#clip0_2053_11538)">
      <g id="Vector" filter="url(#filter0_d_2053_11538)">
        <path
          d="M10.2575 1.19L3.84083 3.91125C3.18083 4.19125 2.75 4.82125 2.75 5.5125V9.625C2.75 14.4812 6.27 19.0225 11 20.125C15.73 19.0225 19.25 14.4812 19.25 9.625V5.5125C19.25 4.82125 18.8192 4.19125 18.1592 3.91125L11.7425 1.19C11.275 0.98875 10.725 0.98875 10.2575 1.19ZM8.51583 14.2538L6.14167 11.9875C6.0568 11.9065 5.98948 11.8103 5.94355 11.7045C5.89762 11.5986 5.87398 11.4852 5.87398 11.3706C5.87398 11.2561 5.89762 11.1426 5.94355 11.0368C5.98948 10.9309 6.0568 10.8348 6.14167 10.7537C6.22653 10.6727 6.32728 10.6085 6.43817 10.5646C6.54905 10.5208 6.6679 10.4982 6.78792 10.4982C6.90794 10.4982 7.02678 10.5208 7.13766 10.5646C7.24855 10.6085 7.3493 10.6727 7.43417 10.7537L9.16667 12.3988L14.5567 7.25375C14.6415 7.17274 14.7423 7.10848 14.8532 7.06464C14.9641 7.0208 15.0829 6.99823 15.2029 6.99823C15.3229 6.99823 15.4418 7.0208 15.5527 7.06464C15.6635 7.10848 15.7643 7.17274 15.8492 7.25375C15.934 7.33476 16.0014 7.43093 16.0473 7.53677C16.0932 7.64262 16.1169 7.75606 16.1169 7.87063C16.1169 7.98519 16.0932 8.09863 16.0473 8.20448C16.0014 8.31032 15.934 8.40649 15.8492 8.4875L9.80833 14.2538C9.72353 14.3349 9.6228 14.3992 9.51191 14.4431C9.40101 14.487 9.28214 14.5096 9.16208 14.5096C9.04203 14.5096 8.92315 14.487 8.81226 14.4431C8.70137 14.3992 8.60064 14.3349 8.51583 14.2538Z"
          fill="#4ECB71"
        />
      </g>
    </g>
    <defs>
      <filter id="filter0_d_2053_11538" x="1.75" y="1.03906" width="18.5" height="22.0859" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2053_11538" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2053_11538" result="shape" />
      </filter>
      <clipPath id="clip0_2053_11538">
        <rect width="22" height="21" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

@Component({
  tag: 'd-credential-card',
  styleUrl: 'd-credential-card.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class DCredentialCard {
  @Prop() name: string;
  @Prop() issuer: string;
  @Prop() logoSrc?: string;
  @Prop() verified?: boolean = false;
  @Prop() description?: string;
  @Prop() expirationDate?: string;

  render() {
    return (
      <Host>
        <div class="between">
          <div class="info">
            <div class="heading">
              <d-avatar name={this.name} src={this.logoSrc}></d-avatar>
              <d-heading class="name line-clamp-2">{this.name}</d-heading>
            </div>
            <span class="description">{this.description}</span>
          </div>
          {this.verified && verifiedUser}
        </div>
        <div class="between">
          <div class="labeled-text">
            <span class="label">Issued by</span>
            <span>{this.issuer}</span>
          </div>
          <div class="labeled-text items-end">
            <span class="label">Exp</span>
            <span>{this.expirationDate}</span>
          </div>
        </div>
      </Host>
    );
  }
}
