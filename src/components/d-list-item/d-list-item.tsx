import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-list-item',
  styleUrl: 'd-list-item.css',
  shadow: true,
})
export class DListItem {
  @Prop() name: string;
  @Prop() issuer?: string;
  @Prop({ attribute: 'logo-src' }) logoSrc?: string;
  @Prop({ reflect: true }) href?: string;
  @Prop() background?: boolean;

  render() {
    const content = (
      <div class={{ 'w-full rounded-lg p-5 flex gap-3 no-underline items-center': true, 'bg-primary': this.background }}>
        <div class="flex flex-grow items-start gap-3">
          <d-avatar name={this.name} src={this.logoSrc} size="l" shape="square"></d-avatar>
          <div class="h-full min-h-[60px] flex flex-col grow justify-between">
            <d-text size="l">{this.name}</d-text>
            <d-text class="!text-on-alt">{this.issuer}</d-text>
            <slot name="date"></slot>
          </div>
        </div>
        {this.href && (
          <div class="shrink-0">
            <d-icon icon="arrow-forward" outline />
          </div>
        )}
      </div>
    );

    if (this.href) {
      return (
        <Host>
          <a href={this.href}>{content}</a>
        </Host>
      );
    } else {
      return <Host>{content}</Host>;
    }
  }
}
