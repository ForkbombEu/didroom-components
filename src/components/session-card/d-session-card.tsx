import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-session-card',
  styleUrl: 'd-session-card.css',
  shadow: true,
})
export class DSessionCard {
  @Prop() sid: string;
  @Prop() date: string = '';
  @Prop() success: boolean = false;

  render() {
    const successIcon = (
      <svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="simple-line-icons:check" clip-path="url(#clip0_3537_19585)">
          <path
            id="Vector"
            d="M44.5 0.5C20.1996 0.5 0.5 20.1996 0.5 44.5C0.5 68.8018 20.1996 88.5 44.5 88.5C68.8018 88.5 88.5 68.8018 88.5 44.5C88.5 20.1996 68.8018 0.5 44.5 0.5ZM44.5 83.0866C23.2714 83.0866 6 65.7286 6 44.4998C6 23.2712 23.2714 5.99983 44.5 5.99983C65.7286 5.99983 83 23.2713 83 44.4998C83 65.7284 65.7286 83.0866 44.5 83.0866ZM62.0601 28.4001L36.2444 54.378L24.6188 42.7524C23.5449 41.6785 21.8042 41.6785 20.7289 42.7524C19.655 43.8263 19.655 45.567 20.7289 46.6409L34.34 60.2534C35.4139 61.3259 37.1547 61.3259 38.2299 60.2534C38.3537 60.1296 38.4596 59.9948 38.5559 59.8546L65.9514 32.2899C67.0239 31.216 67.0239 29.4753 65.9514 28.4001C64.8761 27.3263 63.1354 27.3263 62.0601 28.4001Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_3537_19585">
            <rect width="88" height="88" fill="white" transform="translate(0.5 0.5)" />
          </clipPath>
        </defs>
      </svg>
    );

    const failureIcon = (
      <svg width="89" height="88" viewBox="0 0 89 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3625_37654)">
          <g clip-path="url(#clip1_3625_37654)">
            <path
              d="M44 1C19.6996 1 0 20.4758 0 44.5C0 68.5256 19.6996 88 44 88C68.3018 88 88 68.5256 88 44.5C88 20.4758 68.3018 1 44 1ZM44 82.6481C22.7714 82.6481 5.5 65.4874 5.5 44.4998C5.5 23.5124 22.7714 6.43733 44 6.43733C65.2286 6.43733 82.5 23.5125 82.5 44.4998C82.5 65.4871 65.2286 82.6481 44 82.6481Z"
              fill="currentColor"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.7927 26.4994C26.9383 25.3669 28.7956 25.3669 29.9411 26.4994L62.5744 58.7619C63.72 59.8944 63.72 61.7306 62.5744 62.8631C61.4289 63.9957 59.5716 63.9957 58.4261 62.8631L25.7927 30.6006C24.6472 29.4681 24.6472 27.6319 25.7927 26.4994Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M62.574 26.4994C61.4284 25.3669 59.5711 25.3669 58.4256 26.4994L25.7923 58.7619C24.6467 59.8944 24.6467 61.7306 25.7923 62.8631C26.9378 63.9957 28.7951 63.9957 29.9406 62.8631L62.574 30.6006C63.7195 29.4681 63.7195 27.6319 62.574 26.4994Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_3625_37654">
            <rect width="88" height="88" fill="white" transform="translate(0.5)" />
          </clipPath>
          <clipPath id="clip1_3625_37654">
            <rect width="88" height="87" fill="white" transform="translate(0 1)" />
          </clipPath>
        </defs>
      </svg>
    );

    return (
      <Host>
        <div class="flex flex-col items-center align-middle gap-8 w-52">
          <span class={{ 'text-success': this.success, 'text-error': !this.success }}>{this.success ? successIcon : failureIcon}</span>
          <d-heading size="xs" class="text-on">
            {this.success ? 'Verified.' : 'Failure.'}
          </d-heading>
          <div class="flex flex-col items-center gap-1 bg-primary p-4 rounded-lg">
            <d-text>Session id:</d-text>
            <d-heading size="xl" class={{ 'text-success': this.success, 'text-error': !this.success }}>
              {this.sid}
            </d-heading>
            <d-text>{this.date}</d-text>
          </div>
        </div>
      </Host>
    );
  }
}
