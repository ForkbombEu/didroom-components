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
          {initials ? <span class="font-medium uppercase">{initials}</span> : <d-icon icon="profile" size={28} />}
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
