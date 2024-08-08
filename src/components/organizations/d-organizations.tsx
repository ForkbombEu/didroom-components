import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-organizations',
  styleUrl: 'd-organizations.css',
  shadow: true,
})
export class DOrganizations {
  @Prop() heading: string;
  @Prop() empty: boolean = false;

  render() {
    if (this.empty) {
      return;
    }
    return (
      <Host class="flex flex-col items-center">
        <d-heading size="xs" class="w-full block text-center">
          {this.heading}
        </d-heading>
        <div class="mx-auto mt-8 flex w-11/12 flex-wrap items-center gap-4 space-x-6">
          <slot />
        </div>
      </Host>
    );
  }
}
