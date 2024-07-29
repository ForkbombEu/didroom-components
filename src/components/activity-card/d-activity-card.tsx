import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-activity-card',
  styleUrl: 'd-activity-card.css',
  shadow: true,
})
export class DActivityCard {
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) logo: string;
  @Prop({ reflect: true }) message: string;
  @Prop({ reflect: true }) description: string;
  @Prop({ reflect: true }) date: string;
  @Prop({ reflect: true }) read: boolean = false;

  render() {
    return (
      <Host>
        <div class="items-start border-stroke flex gap-4 border-b p-2 rounded-lg w-full max-w-screen-sm">
          <d-avatar src={this.logo} name={this.name} shape="square" />
          <div class="flex flex-col gap-2">
            <h2>{this.message}</h2>
            <d-text size="s" class="text-on-alt">
              {this.description}
            </d-text>
            <div class="flex items-center gap-2.5">
              {!this.read && <d-info-led type="warning" />}
              <d-text size="xs">{this.date}</d-text>
            </div>
            <div class="flex justify-end gap-2.5">
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
