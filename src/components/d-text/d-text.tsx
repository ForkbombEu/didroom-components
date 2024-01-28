import { Component, Host, Prop, h } from '@stencil/core';
import { Size } from '../types';

@Component({
  tag: 'd-text',
  styleUrl: 'd-text.css',
  shadow: true,
})
export class DText {
  @Prop() size: Size = 'm';

  render() {
    return (
      <Host size={this.size}>
        <slot></slot>
      </Host>
    );
  }
}
