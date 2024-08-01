import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'd-list',
  styleUrl: 'd-list.css',
  shadow: true,
})
export class DList {
  render() {
    return (
      <Host>
        <div class="flex flex-col gap-2">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
