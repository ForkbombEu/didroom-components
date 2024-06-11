import { Component, EventEmitter, Host, Prop, Event, h } from '@stencil/core';

@Component({
  tag: 'd-activity-card',
  styleUrl: 'd-activity-card.css',
  shadow: true,
})
export class DActivityCard {
  @Prop({ reflect: true }) id: string;
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) logo: string;
  @Prop({ reflect: true }) credentialSrc: string;

  @Event() dCancelActivity!: EventEmitter<string>;

  render() {
    const cancelActivity = (value: string) => {
      this.dCancelActivity.emit(value);
    };
    return (
      <Host>
        <div class="itens-start border-strocke flex gap-4 border-b py-2">
          <d-avatar src={this.logo} name={this.name} shape="square" />
          <div class="flex justify-end gap-2.5">
            <slot />
            <d-button size="small" color="accent" onClick={async () => await cancelActivity(this.id)}>
              remove
            </d-button>
            <d-button size="small" color="primary" href={this.credentialSrc}>
              show me!
            </d-button>
            <slot name='actions'></slot>
          </div>
        </div>
      </Host>
    );
  }
}
