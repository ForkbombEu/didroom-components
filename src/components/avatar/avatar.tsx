import { Component, Host, Prop, State, h } from '@stencil/core';
import { Shape, Size } from '../types';

@Component({
  tag: 'd-avatar',
  styleUrl: 'avatar.css',
  shadow: true,
})
export class Avatar {
  @Prop() name?: string;
  @Prop({ reflect: true }) size?: Size = 'm';
  @Prop({ reflect: true }) shape?: Shape = 'round';
  @Prop({ reflect: true }) src?: string;

  @State() error: boolean = false;

  render() {
    if (this.src && !this.error) {
      return (
        <Host>
          <img
            src={this.src}
            alt={this.name}
            onError={() => {
              this.error = true;
            }}
          ></img>
        </Host>
      );
    } else {
      const initials = this.generateInitials();
      return (
        <Host aria-label={this.name} role="figure">
          {initials ? (
            <span class="font-medium uppercase">{initials}</span>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.0015 16.2796C11.9477 16.2795 9.68689 16.8564 8 18C6.31311 19.1436 5.28077 20.7992 4.5638 22.6777C4.30879 23.3422 4.85297 24 5.5793 24H22.4192C23.1478 24 23.6897 23.3422 23.437 22.6777C22.72 20.7992 21.6869 19.1436 20 18C18.3131 16.8564 16.0554 16.2795 14.0015 16.2796ZM19.0289 8.9125C19.0289 10.2154 18.4987 11.4649 17.5548 12.3862C16.6109 13.3074 15.3307 13.825 13.9959 13.825C12.661 13.825 11.3808 13.3074 10.4369 12.3862C9.49304 11.4649 8.96277 10.2154 8.96277 8.9125C8.96277 7.60962 9.49304 6.36011 10.4369 5.43884C11.3808 4.51756 12.661 4 13.9959 4C15.3307 4 16.6109 4.51756 17.5548 5.43884C18.4987 6.36011 19.0289 7.60962 19.0289 8.9125Z"
                fill="#F8FAFE"
              />
            </svg>
          )}
        </Host>
      );
    }
  }

  private generateInitials(): string | boolean {
    if (this.name) {
      return this.name
        .trim()
        .split(' ')
        .slice(0, 2)
        .map(name => name.substring(0, 1))
        .join('');
    }

    return false;
  }
}
