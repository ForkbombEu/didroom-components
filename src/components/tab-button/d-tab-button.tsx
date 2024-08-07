import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-tab-button',
  styleUrl: 'd-tab-button.css',
  shadow: true,
})
export class DTabButton {
  @Prop() tab: 'home' | 'profile' | 'activity' | 'wallet';
  @Prop() active: boolean = false;
  @Prop() hasAlert: boolean = false;

  render() {
    const homeSvg = (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Icon / outline / home">
          <path
            id="Vector"
            d="M14 4.25C14.35 4.25 14.6875 4.35916 14.9618 4.55665L23.1284 10.4366C23.3249 10.5781 23.4816 10.7595 23.5885 10.9647L24.2537 10.6182L23.5885 10.9647C23.6952 11.1697 23.75 11.3939 23.75 11.62V22.26C23.75 22.6451 23.5909 23.0209 23.2972 23.3029C23.0024 23.5859 22.5962 23.75 22.1667 23.75H17.6167C17.4656 23.75 17.3265 23.6921 17.2286 23.5981C17.1318 23.5051 17.0833 23.3857 17.0833 23.268V17.78C17.0833 16.9769 16.7507 16.2132 16.1693 15.655C15.5889 15.0979 14.8081 14.79 14 14.79C13.1919 14.79 12.4111 15.0979 11.8307 15.655C11.2493 16.2132 10.9167 16.9769 10.9167 17.78V23.268C10.9167 23.3857 10.8682 23.5051 10.7714 23.5981C10.6735 23.6921 10.5344 23.75 10.3833 23.75H5.83333C5.40375 23.75 4.99762 23.5859 4.70282 23.3029C4.40906 23.0209 4.25 22.6451 4.25 22.26V11.62C4.25 11.3939 4.30475 11.1697 4.41152 10.9647C4.51838 10.7595 4.67507 10.5781 4.87156 10.4367L4.43333 9.828L4.87156 10.4367L13.0382 4.55665C13.3125 4.35916 13.65 4.25 14 4.25Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </g>
      </svg>
    );

    const homeSvgFilled = (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.4 3.948C14.9961 3.6572 14.5049 3.5 14 3.5C13.4951 3.5 13.0039 3.6572 12.6 3.948L4.43333 9.828C4.14354 10.0366 3.90833 10.3072 3.74634 10.6182C3.58434 10.9293 3.5 11.2723 3.5 11.62V22.26C3.5 22.8541 3.74583 23.4238 4.18342 23.8439C4.621 24.264 5.21449 24.5 5.83333 24.5H10.3833C10.7237 24.5 11.0501 24.3702 11.2908 24.1392C11.5315 23.9081 11.6667 23.5947 11.6667 23.268V17.78C11.6667 17.1859 11.9125 16.6162 12.3501 16.1961C12.7877 15.776 13.3812 15.54 14 15.54C14.6188 15.54 15.2123 15.776 15.6499 16.1961C16.0875 16.6162 16.3333 17.1859 16.3333 17.78V23.268C16.3333 23.5947 16.4685 23.9081 16.7092 24.1392C16.9499 24.3702 17.2763 24.5 17.6167 24.5H22.1667C22.7855 24.5 23.379 24.264 23.8166 23.8439C24.2542 23.4238 24.5 22.8541 24.5 22.26V11.62C24.5 11.2723 24.4157 10.9293 24.2537 10.6182C24.0917 10.3072 23.8565 10.0366 23.5667 9.828L15.4 3.948Z"
          fill="currentColor"
        />
      </svg>
    );

    const profileSvg = (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2833_26381)">
          <path
            d="M5.76455 21.9991C7.94789 14.4808 20.0619 14.4808 22.2352 21.9991C22.2855 22.1493 22.1346 22.2394 21.9635 22.2494H6.02615C5.8551 22.2494 5.71424 22.1493 5.75449 21.9991H5.76455Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M18.0901 9.71538C18.0901 10.7565 17.6675 11.7677 16.8927 12.5085C16.1281 13.2493 15.0817 13.6798 13.985 13.6798C12.8883 13.6798 11.8519 13.2593 11.0772 12.5085C10.3125 11.7677 9.87988 10.7565 9.87988 9.71538C9.87988 8.67422 10.3025 7.6631 11.0772 6.92228C11.8419 6.18145 12.8883 5.75098 13.985 5.75098C15.0817 5.75098 16.118 6.17144 16.8927 6.92228C17.6574 7.6631 18.0901 8.67422 18.0901 9.71538Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_2833_26381">
            <rect width="18" height="18" fill="white" transform="translate(5 5)" />
          </clipPath>
        </defs>
      </svg>
    );

    const profileSvgFilled = (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2833_26393)">
          <path
            d="M5.76455 21.9991C7.94789 14.4808 20.0619 14.4808 22.2352 21.9991C22.2855 22.1493 22.1346 22.2394 21.9635 22.2494H6.02615C5.8551 22.2494 5.71424 22.1493 5.75449 21.9991H5.76455Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M18.0901 9.71538C18.0901 10.7565 17.6675 11.7677 16.8927 12.5085C16.1281 13.2493 15.0817 13.6798 13.985 13.6798C12.8883 13.6798 11.8519 13.2593 11.0772 12.5085C10.3125 11.7677 9.87988 10.7565 9.87988 9.71538C9.87988 8.67422 10.3025 7.6631 11.0772 6.92228C11.8419 6.18145 12.8883 5.75098 13.985 5.75098C15.0817 5.75098 16.118 6.17144 16.8927 6.92228C17.6574 7.6631 18.0901 8.67422 18.0901 9.71538Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_2833_26393">
            <rect width="18" height="18" fill="white" transform="translate(5 5)" />
          </clipPath>
        </defs>
      </svg>
    );

    const walletSvg = (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2833_26363)">
          <path
            d="M4.44287 10.3597V19.5054C4.44287 21.0943 5.29796 22.3955 6.35425 22.3955H21.6453C22.7016 22.3955 23.5566 21.1068 23.5566 19.5054V10.3597H20.5764V7.41959C20.5764 6.41869 19.759 5.60547 18.7531 5.60547H6.26622C5.26024 5.60547 4.44287 6.41869 4.44287 7.41959V10.3597ZM4.44287 10.3597H20.5638"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.2062 15.4261C19.734 15.4261 20.1619 15.0004 20.1619 14.4753C20.1619 13.9501 19.734 13.5244 19.2062 13.5244C18.6784 13.5244 18.2505 13.9501 18.2505 14.4753C18.2505 15.0004 18.6784 15.4261 19.2062 15.4261Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_2833_26363">
            <rect width="21" height="18.6667" fill="white" transform="translate(3.5 4.66699)" />
          </clipPath>
        </defs>
      </svg>
    );

    const walletSvgFilled = (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2833_26390)">
          <path
            d="M3.5 11.126V19.585C3.5 21.6834 4.71069 23.3337 6.26258 23.3337H21.7374C23.2893 23.3337 24.5 21.6834 24.5 19.585V12.126C24.5 11.5737 24.0523 11.126 23.5 11.126H3.5ZM19.272 15.4429C18.7327 15.4429 18.3035 15.0167 18.3035 14.4812C18.3035 13.9457 18.7327 13.5304 19.272 13.5304C19.8113 13.5304 20.2296 13.9566 20.2296 14.4812C20.2296 15.0058 19.8003 15.4429 19.272 15.4429ZM21.4843 7.32273C21.4843 5.85825 20.2846 4.66699 18.8097 4.66699H6.16352C4.69969 4.66699 3.5 5.85825 3.5 7.32273V9.48666H21.4843V7.32273Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_2833_26390">
            <rect width="21" height="18.6667" fill="white" transform="translate(3.5 4.66699)" />
          </clipPath>
        </defs>
      </svg>
    );

    const activitySvg = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Icon / outline / notification">
          <path
            id="union-1"
            d="M14 17V18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18V17M12 4C14.7614 4 17 6.23858 17 9V14H17.5C18.3284 14 19 14.6716 19 15.5C19 16.3284 18.3284 17 17.5 17H6.5C5.67157 17 5 16.3284 5 15.5C5 14.6716 5.67157 14 6.5 14H7V9C7 6.23858 9.23858 4 12 4Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    );

    const activitySvgFilled = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Icon / fill / notification">
          <g id="union-1">
            <path
              d="M7 9V14H6.5C5.67157 14 5 14.6716 5 15.5C5 16.3284 5.67157 17 6.5 17H17.5C18.3284 17 19 16.3284 19 15.5C19 14.6716 18.3284 14 17.5 14H17V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9Z"
              fill="currentColor"
            />
            <path
              d="M14 17V18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18V17M12 4C14.7614 4 17 6.23858 17 9V14H17.5C18.3284 14 19 14.6716 19 15.5C19 16.3284 18.3284 17 17.5 17H6.5C5.67157 17 5 16.3284 5 15.5C5 14.6716 5.67157 14 6.5 14H7V9C7 6.23858 9.23858 4 12 4Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
    );

    const svg = () => {
      switch (this.tab) {
        case 'home':
          return this.active ? homeSvgFilled : homeSvg;
        case 'profile':
          return this.active ? profileSvgFilled : profileSvg;
        case 'activity':
          return this.active ? activitySvgFilled : activitySvg;
        case 'wallet':
          return this.active ? walletSvgFilled : walletSvg;
      }
    };

    return (
      <Host>
        <ion-tab-button
          tab={this.tab}
          href={`/${this.tab}`}
          class={{
            'text-on-alt': !this.active,
            'text-on': this.active,
          }}
        >
          <div class="relative w-fit">
            {this.hasAlert && (
              <div class="absolute right-1 top-1">
                <d-info-led type="warning" class={{ 'border rounded-full': true }}></d-info-led>
              </div>
            )}
            {svg()}
          </div>
          <ion-label>
            <d-text size="s" class={{ 'text-center text-xs font-medium leading-[normal] capitalize': true, 'text-on-alt': !this.active, 'text-on': this.active }}>
              <slot></slot>
            </d-text>
          </ion-label>
        </ion-tab-button>
      </Host>
    );
  }
}
