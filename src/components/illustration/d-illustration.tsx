import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-illustration',
  styleUrl: 'd-illustration.css',
  shadow: true,
})
export class DIllustration {
  @Prop() background: string;

  render() {
    return (
      <Host>
        <div class="relative">
          <img src={this.background} class="max-h-[50vh] w-full shrink-0 fill-highlight opacity-50" alt="background" />
          <div class="absolute w-full">
            <div class="mx-auto w-fit max-w-96">
              <slot />
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
