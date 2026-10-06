import { Component, Host, Prop, h } from '@stencil/core';
import { Color, Size } from '../types';

@Component({
  tag: 'd-heading',
  styleUrl: 'd-heading.css',
  shadow: true,
})
export class DHeading {
  @Prop() size: Size = 'm';
  @Prop() color: Color = 'primary';
  @Prop() level: 1 | 2 | 3 | 4 | 5 | 6 = 2;

  render() {
    return (
      <Host size={this.size} color={this.color} role="heading" aria-level={String(this.level)}>
        <slot></slot>
      </Host>
    );
  }
}
