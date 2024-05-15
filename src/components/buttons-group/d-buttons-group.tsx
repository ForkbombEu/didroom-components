import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'd-buttons-group',
  styleUrl: 'd-buttons-group.css',
  shadow: true,
})
export class DButtonsGroup {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
