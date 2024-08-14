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
          <span class={{ 'text-success': this.success, 'text-error': !this.success }}>{this.success ? <d-icon icon="done" outline /> : failureIcon}</span>
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
