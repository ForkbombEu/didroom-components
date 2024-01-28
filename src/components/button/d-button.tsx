import { Component, Host, Prop, h } from '@stencil/core';
import { Color } from '../types';

@Component({
  tag: 'd-button',
  styleUrl: 'd-button.scss',
  shadow: true,
})
export class DButton {
  @Prop() color?: Color = 'primary';
  // @Prop() outline?: boolean = false;
  @Prop({ reflect: true }) href?: string;
  @Prop({ reflect: true }) disabled?: boolean = false;

  render() {
    if (this.href) {
      return (
        <Host>
          <a class={this.color} href={this.href}>
            <slot></slot>
          </a>
        </Host>
      );
    } else {
      return (
        <Host>
          <button class={this.color} disabled={this.disabled} aria-disabled={this.disabled}>
            <slot></slot>
          </button>
        </Host>
      );
    }
  }
}
