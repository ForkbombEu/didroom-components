import { Component, Host, Prop, h } from '@stencil/core';
import { Gap } from '../types';

@Component({
  tag: 'd-vertical-stack',
  styleUrl: 'd-vertical-stack.css',
  shadow: false,
})
export class DVerticalStack {
  @Prop() gap: Gap = 2;
  @Prop() separator?: boolean = false;

  render() {
    return (
      <Host>
        <div class={{ 'flex flex-col': true, 'divide-y divide-highlight': this.separator, [`gap-${this.gap}`]: Boolean(this.gap) }}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
