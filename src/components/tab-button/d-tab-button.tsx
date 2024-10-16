import { Component, Host, Prop, h } from '@stencil/core';
export type Tab = 'home' | 'profile' | 'activity' | 'wallet';

@Component({
  tag: 'd-tab-button',
  styleUrl: 'd-tab-button.css',
  shadow: true,
})
export class DTabButton {
  @Prop() tab: Tab;
  @Prop() active: boolean = false;
  @Prop() hasAlert: boolean = false;

  render() {
    const svg = (): JSX.Element | null => {
      const icons: Record<string, string> = {
        home: 'home',
        profile: 'profile',
        activity: 'notification',
        wallet: 'wallet',
      };

      const icon = icons[this.tab];
      if (!icon) return null;

      return <d-icon icon={icon} size={28} outline={!this.active} />;
    };

    return (
      <Host>
        <ion-tab-button
          tab={this.tab}
          href={`/${this.tab}`}
          class={{
            'h-12 min-w-12 block': true,
            'text-on-alt': !this.active,
            'text-on': this.active,
          }}
        >
          <div class="relative w-fit">
            {this.hasAlert && (
              <div class="absolute right-1 top-1 border-surface">
                <d-info-led type="warning" class={{ 'border rounded-full border-surface': true }}></d-info-led>
              </div>
            )}
            {svg()}
          </div>
          <ion-label>
            <d-text size="s" class={{ 'text-center text-xs font-medium leading-[normal] capitalize': true, 'text-on-alt': !this.active, 'text-on': this.active }}>
              <slot></slot>
            </d-text>
          </ion-label>
        </ion-tab-button>
      </Host>
    );
  }
}
