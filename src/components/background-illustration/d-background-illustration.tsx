import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-background-illustration',
  styleUrl: 'd-background-illustration.css',
  shadow: false,
})
export class DBackgroundIllustration {
  @Prop() background: string;
  @Prop({ reflect: true }) compact = false;

  render() {
    const style = {
      backgroundImage: `url(${this.background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
    return (
      <Host style={style} class={{ 'illustration-background block relative w-full h-fit shrink-0 fill-highlight opacity-50': true, 'illustration-compact': this.compact }}>
        <div class="w-full">
          <div class={{ 'mx-auto max-w-96': true, 'w-fit': !this.compact, 'w-full': this.compact }}>
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
