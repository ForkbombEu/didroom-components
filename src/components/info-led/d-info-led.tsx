import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-info-led',
  styleUrl: 'd-info-led.css',
  shadow: true,
})
export class DInfoLed {
  @Prop() type: 'success' | 'warning' | 'error' = 'success';

  render() {
    return (
      <Host>
        <div class={{'h-[5px] w-[5px] shrink-0 rounded-full border border-solid':true,
          'bg-success border-success': this.type === 'success',
          'bg-warning border-warning': this.type === 'warning',
          'bg-error border-error': this.type === 'error',
        }} />
      </Host>
    );
  }
}
