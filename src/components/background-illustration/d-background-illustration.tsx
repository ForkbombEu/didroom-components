import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-background-illustration',
  styleUrl: 'd-background-illustration.css',
  shadow: false,
})
export class DBackgroundIllustration {
  @Prop() background: string;

  render() {
    const style = {
      backgroundImage: `url(${this.background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
    return (
      <Host style={style} class="block relative max-h-[50vh] w-full h-fit shrink-0 fill-highlight opacity-50">
        <div class="w-full">
          <div class="mx-auto w-fit max-w-96">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
