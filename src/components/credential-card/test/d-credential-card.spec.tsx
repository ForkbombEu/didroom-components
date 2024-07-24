import { newSpecPage } from '@stencil/core/testing';
import { DCredentialCard } from '../d-credential-card';

describe('d-credential-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DCredentialCard],
      html: `<d-credential-card></d-credential-card>`,
    });
    const bgnumber = page.root.shadowRoot.innerHTML.split('bg')[1].split('"')[0];

    expect(page.root).toEqualHtml(`
      <d-credential-card>
        <mock:shadow-root>
          <div class="bg${bgnumber} main">
            <div class="flex flex-col gap-2 w-full">
              <div class="flex items-start justify-between w-full">
                <div class="flex-col gap-3 inline-flex">
                  <div class="flex gap-2 items-start">
                    <d-avatar shape="square" size="s"></d-avatar>
                    <d-text class="font-normal leading-7 not-italic" size="xl"></d-text>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap gap-2">
                <slot></slot>
              </div>
            </div>
            <div class="flex items-start justify-between w-full">
              <div class="flex flex-col font-normal gap-0.5 leading-[130%] not-italic text-xs tracking-[-0.5px] whitespace-nowrap">
                <span></span>
                <span></span>
              </div>
              <div class="flex flex-col font-normal gap-0.5 items-end leading-[130%] not-italic text-xs tracking-[-0.5px] whitespace-nowrap">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </d-credential-card>
    `);
  });
});
