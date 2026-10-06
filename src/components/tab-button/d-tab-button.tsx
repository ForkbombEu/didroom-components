import { Component, Host, Prop, Method, h } from '@stencil/core';
export type Tab = 'home' | 'profile' | 'activity' | 'wallet';

@Component({
  tag: 'd-tab-button',
  styleUrl: 'd-tab-button.css',
  shadow: true,
})
export class DTabButton {
  @Prop() tab: Tab;
  @Prop() active = false;
  @Prop() hasAlert = false;
  @Prop() href?: string;
  @Prop() accessibleLabel?: string;
  @Prop() focusIndex = 0;
  private link: HTMLAnchorElement;

  @Method()
  async focusTab() {
    this.link?.focus();
  }

  render() {
    const icons: Record<Tab, string> = {
      home: 'home',
      profile: 'profile',
      activity: 'notification',
      wallet: 'wallet',
    };

    return (
      <Host>
        <a
          ref={el => (this.link = el)}
          href={this.href || `/${this.tab}`}
          role="tab"
          aria-selected={String(this.active)}
          aria-label={this.accessibleLabel}
          tabIndex={this.focusIndex}
          class={{ 'tab-native': true, 'text-on-alt': !this.active, 'text-on': this.active }}
          onKeyDown={event => {
            if (event.key === ' ') {
              event.preventDefault();
              this.link.click();
            }
          }}
        >
          <div class="relative w-fit" aria-hidden="true">
            {this.hasAlert && (
              <div class="absolute right-1 top-1 border-surface">
                <d-info-led type="warning" class="border rounded-full border-surface" />
              </div>
            )}
            {icons[this.tab] && <d-icon icon={icons[this.tab]} size={28} outline={!this.active} />}
          </div>
          <d-text size="s" class="text-center font-medium">
            <slot />
          </d-text>
        </a>
      </Host>
    );
  }
}
