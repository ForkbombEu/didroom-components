import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-activity-card',
  styleUrl: 'd-activity-card.css',
  shadow: true,
})
export class DActivityCard {
  @Prop({ reflect: true }) message: string;
  @Prop({ reflect: true }) logo: string;
  @Prop({ reflect: true }) date: string;
  @Prop({ reflect: true }) read: boolean = false;
  @Prop({ reflect: true }) href?: string;

  render() {
    return (
      <Host>
        <d-list-item name={this.message} logo-src={this.logo} href={this.href}>
          <div slot="date">
            <div class="flex items-center gap-2.5">
              {!this.read && <d-info-led type="warning" />}
              <d-text size="xs" class="!text-on-alt">
                {this.date}
              </d-text>
            </div>
          </div>
        </d-list-item>
      </Host>
    );
  }
}
