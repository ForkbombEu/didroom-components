import { Component, Host, Prop, h } from '@stencil/core';

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

  render() {
    return (
      <Host>
        <div class="flex flex-col items-center justify-center gap-4">
          <div>
            <slot />
          </div>
          <div class="flex flex-col gap-1 items-center">
            <d-heading size="s" class="text-center">{this.heading}</d-heading>
            <d-text size="l" class="text-center">
              {this.text}
            </d-text>
          </div>
          {this.buttonText && (
            <d-button expand color="outline" href={this.href} class="w-full">
              {this.buttonText}{' '}
              <div slot="end">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 512 512" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100" class="w-6 h-6" fill="none"></path>
                </svg>
              </div>
            </d-button>
          )}
        </div>
      </Host>
    );
  }
}
