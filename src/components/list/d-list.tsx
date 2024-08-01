import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-list',
  styleUrl: 'd-list.css',
  shadow: true,
})
export class DList {
  @Prop() gap: 2 | 4 | 8 = 2;

  render() {
    return (
      <Host>
        <div class={{ 'flex flex-col': true, 'gap-2': this.gap == 2, 'gap-4': this.gap == 4, 'gap-8': this.gap == 8 }}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
