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
  @Prop({ reflect: true }) type: 'error' | 'warning' | 'success';

  render() {
    return (
      <Host>
        <div class="items-start border-stroke flex gap-4 border-b py-2 w-fit">
          <d-avatar src={this.logo} name={this.name} shape="square" />
          <div class="flex flex-col gap-2">
            <h2>{this.message}</h2>
            <d-text size="s" class="text-on-alt">
              {this.description}
            </d-text>
            <div class="flex items-center gap-2.5">
              <d-info-led type={this.type} />
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
