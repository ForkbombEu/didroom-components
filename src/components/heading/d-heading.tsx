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

  render() {
    return (
      <Host size={this.size} color={this.color}>
        <slot></slot>
      </Host>
    );
  }
}
