import { Component, EventEmitter, Event, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-checkbox',
  styleUrl: 'd-checkbox.css',
  shadow: true,
})
export class DCheckbox {
  @Prop() checked: boolean;
  @Prop() error: string | undefined = undefined;
  @Event() dChange!: EventEmitter<boolean>;

  private updateValue = (value: boolean) => {
    this.dChange.emit(value);
  };

  render() {
    return (
      <Host>
        <d-vertical-stack>
          <d-horizontal-stack class="items-center" gap={0}>
            <ion-checkbox onIonChange={e => this.updateValue(e.detail.checked)} checked={this.checked}></ion-checkbox>
            <div class="-ml-3">
              <slot />
            </div>
          </d-horizontal-stack>
          {this.error && (
            <d-text size="s" class="text-error">
              {this.error}
            </d-text>
          )}
        </d-vertical-stack>
      </Host>
    );
  }
}
