import { Component, Host, Prop, h } from '@stencil/core';
import { Gap } from '../types';

@Component({
  tag: 'd-horizontal-stack',
  styleUrl: 'd-horizontal-stack.css',
  shadow: true,
})
export class DHorizontalStack {
  @Prop() gap: Gap = 2;

  render() {
    return (
      <Host class={{ 'flex flex-row': true, 'gap-2': this.gap == 2, 'gap-4': this.gap == 4, 'gap-8': this.gap == 8 }}>
        <slot></slot>
      </Host>
    );
  }
}
