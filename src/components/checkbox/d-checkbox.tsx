import { Component, EventEmitter, Event, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-checkbox',
  styleUrl: 'd-checkbox.css',
  shadow: true,
})
export class DCheckbox {
  @Prop() checked: boolean;
  @Event() dChange!: EventEmitter<boolean>;

  private updateValue = (value: boolean) => {
    this.dChange.emit(value);
  };

  render() {
    return (
      <Host>
        <d-horizontal-stack>
          <ion-checkbox labelPlacement="end" onIonChange={e => this.updateValue(e.detail.checked)} checked={this.checked}></ion-checkbox>
          <div>
            <slot />
          </div>
        </d-horizontal-stack>
      </Host>
    );
  }
}
