import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'd-swipable-page',
  styleUrl: 'd-swipable-page.css',
  shadow: true,
})
export class DSwipablePage {
  @Prop() background: string;
  @Prop() title: string;
  @Prop() subtitle?: string;
  @Prop() description: string;

  render() {
    return (
      <Host>
        <div class="flex flex-col justify-between">
          <d-background-illustration background={this.background}>
            <slot />
          </d-background-illustration>
          <div class="flex flex-col gap-4 px-4">
            <d-heading size="s">{this.title},</d-heading>
            {this.subtitle && (
              <d-text size="xl" class="pb-4">
                {this.subtitle}
              </d-text>
            )}
            <d-text size="m">{this.description}</d-text>
          </div>
        </div>
      </Host>
    );
  }
}
