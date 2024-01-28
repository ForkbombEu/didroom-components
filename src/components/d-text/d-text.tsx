import { Component, Host, Prop, h } from '@stencil/core';
import { Color, Size } from '../types';

@Component({
  tag: 'd-text',
  styleUrl: 'd-text.css',
  shadow: true,
})
export class DText {
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
