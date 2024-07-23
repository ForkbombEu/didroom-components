import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'd-badge',
  styleUrl: 'd-badge.css',
  shadow: true,
})
export class DBadge {
  render() {
    return (
      <Host>
        <div class="flex w-fit justify-center items-center bg-accent px-2 py-0.5 rounded-md">
          <span class="text-on-accent text-center text-sm font-normal leading-5">
            <slot></slot>
          </span>
        </div>
      </Host>
    );
  }
}
