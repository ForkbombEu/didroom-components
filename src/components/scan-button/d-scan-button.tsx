import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-scan-button',
  styleUrl: 'd-scan-button.css',
  shadow: true,
})
export class DScanButton {
  @Prop() href: string;

  render() {
    const QrIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <g id="Layer_1" clip-path="url(#clip0_4254_6992)">
          <path
            id="Vector"
            d="M5.96997 4.79004H5.46997C5.19383 4.79004 4.96997 5.0139 4.96997 5.29004V9.29004C4.96997 9.56618 5.19383 9.79004 5.46997 9.79004H5.96997C6.24611 9.79004 6.46997 9.56618 6.46997 9.29004V5.29004C6.46997 5.0139 6.24611 4.79004 5.96997 4.79004Z"
            fill="currentColor"
          />
          <path
            id="Vector_2"
            d="M12.72 10.42H12.22C11.9438 10.42 11.72 10.6439 11.72 10.92V12.82C11.72 13.0962 11.9438 13.32 12.22 13.32H12.72C12.9961 13.32 13.22 13.0962 13.22 12.82V10.92C13.22 10.6439 12.9961 10.42 12.72 10.42Z"
            fill="currentColor"
          />
          <path id="Vector_3" d="M12.72 8.07996H9.19995V6.57996H12.72C13 6.57996 13.22 6.79996 13.22 7.07996V7.57996C13.22 7.85996 13 8.07996 12.72 8.07996Z" fill="currentColor" />
          <path
            id="Vector_4"
            d="M9.36997 13.29H5.46997C5.18997 13.29 4.96997 13.07 4.96997 12.79V12.29C4.96997 12.01 5.18997 11.79 5.46997 11.79H8.36997V5.29004C8.36997 5.01004 8.58997 4.79004 8.86997 4.79004H9.36997C9.64997 4.79004 9.86997 5.01004 9.86997 5.29004V12.79C9.86997 13.07 9.64997 13.29 9.36997 13.29Z"
            fill="currentColor"
          />
          <path
            id="Vector_5"
            d="M17.5 6.01H17C16.72 6.01 16.5 5.79 16.5 5.51V2.25C16.5 1.84 16.16 1.5 15.75 1.5H2.25C1.84 1.5 1.5 1.84 1.5 2.25V5.51C1.5 5.79 1.28 6.01 1 6.01H0.5C0.22 6.01 0 5.79 0 5.51V2.25C0 1.01 1.01 0 2.25 0H15.75C16.99 0 18 1.01 18 2.25V5.51C18 5.79 17.78 6.01 17.5 6.01Z"
            fill="currentColor"
          />
          <path
            id="Vector_6"
            d="M15.75 18H2.25C1.01 18 0 16.99 0 15.75V12.52C0 12.24 0.22 12.02 0.5 12.02H1C1.28 12.02 1.5 12.24 1.5 12.52V15.75C1.5 16.16 1.84 16.5 2.25 16.5H15.75C16.16 16.5 16.5 16.16 16.5 15.75V12.52C16.5 12.24 16.72 12.02 17 12.02H17.5C17.78 12.02 18 12.24 18 12.52V15.75C18 16.99 16.99 18 15.75 18Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_4254_6992">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
    return (
      <Host>
        <d-button href={this.href} color="accent" size="large" class="shadow-xl opacity-80 fixed right-5 bottom-5 rounded-lg">
          <div slot="start">{QrIcon}</div>
          <slot></slot>
        </d-button>
      </Host>
    );
  }
}
