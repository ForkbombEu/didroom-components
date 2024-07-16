import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-loading',
  styleUrl: 'd-loading.css',
  shadow: true,
})
export class DLoading {
  @Prop() loading: boolean = false;
  @Prop() message: string;

  render() {
    if (!this.loading) {
      return;
    }
    return (
      <Host>
        <div class="fixed z-50 flex h-full min-h-screen w-full flex-col items-center justify-around bg-surface ion-padding opacity-90">
          <div class="flex flex-col items-center gap-8">
            <slot />
            {this.message && <d-heading size="s">{this.message}</d-heading>}
          </div>
        </div>
      </Host>
    );
  }
}
