import { Component, Host, Prop, State, h } from '@stencil/core';
import { Shape, Size } from '../types';

@Component({
  tag: 'd-avatar',
  styleUrl: 'avatar.css',
  shadow: true,
})
export class Avatar {
  @Prop({ reflect: true }) src?: string;
  @Prop({ reflect: true }) name?: string;
  @Prop({ reflect: true }) size?: Size = 'm';
  @Prop({ reflect: true }) shape?: Shape = 'round';
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
            <svg class="absolute text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
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
        .map(name => name.substring(0, 1))
        .join('');
    }

    return false;
  }
}
