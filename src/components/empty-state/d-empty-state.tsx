import { Component, EventEmitter, Host, Prop, h, Event } from '@stencil/core';

@Component({
  tag: 'd-empty-state',
  styleUrl: 'd-empty-state.css',
  shadow: true,
})
export class DEmptyState {
  @Prop() heading: string;
  @Prop() text: string;
  @Prop() buttonText: string | undefined = undefined;
  @Prop() href: string | undefined = undefined;
  @Event() buttonClick: EventEmitter<void>;

  private onClick = () => {
    this.buttonClick.emit();
  };

  render() {
    return (
      <Host>
        <div class="flex flex-col items-center justify-center gap-4">
          <div>
            <slot />
          </div>
          <div class="flex flex-col gap-1 items-center">
            <d-heading size="s" class="text-center">
              {this.heading}
            </d-heading>
            <d-text size="l" class="text-center">
              {this.text}
            </d-text>
          </div>
          {this.buttonText && (
            <d-button expand color="outline" href={this.href} onClick={this.onClick} class="w-full">
              {this.buttonText}
              <div slot="end">
                <d-icon icon="arrow-forward" outline />
              </div>
            </d-button>
          )}
        </div>
      </Host>
    );
  }
}
