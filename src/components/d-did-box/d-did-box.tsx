import { Component, Host, Prop, h } from '@stencil/core';
import { parse } from 'did-resolver';

@Component({
  tag: 'd-did-box',
  styleUrl: 'd-did-box.css',
  shadow: true,
})
export class DDidBox {
  @Prop() did: string;

  render() {
    if (!this.did) {
      return;
    }
    const { method, id: fullId } = parse(this.did)!;
    const [submethod, id] = fullId.split(':');
    return (
      <Host>
        <d-text size="s" class="text-gray">
          <a class="flex h-12" href={`https://explorer.did.dyne.org/details/did:dyne:${fullId}`}>
            <d-text size="s" class="w-full flex justify-center flex-wrap space-y-0.5">
              <span class="w-4 h-4 mr-2">
                <d-icon icon="key" outline />
              </span>
              <span class="text-on-alt">{'did'}</span>
              <span class="text-gray-400">:</span>
              <span class="text-on">{method}</span>
              <span class="text-gray-400">:</span>
              <span class="text-on-alt">{submethod}</span>
              <span class="text-gray-400">:</span>
              <br />
              <span>{id}</span>
            </d-text>
          </a>
        </d-text>
      </Host>
    );
  }
}
