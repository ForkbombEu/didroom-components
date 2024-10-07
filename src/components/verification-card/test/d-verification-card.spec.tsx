import { newSpecPage } from '@stencil/core/testing';
import { DVerificationCard } from '../d-verification-card';

describe('d-verification-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DVerificationCard],
      html: `<d-verification-card></d-verification-card>`,
    });
    expect(page.root).toEqualHtml(`
      <d-verification-card>
        <mock:shadow-root>
         <div class="bg-primary flex gap-3 items-start no-underline p-5 rounded-lg w-full">
           <d-vertical-stack class="w-full">
             <d-horizontal-stack class="items-start justify-between w-full">
               <d-avatar name="" shape="square" size="l"></d-avatar>
               <div class="border border-accent h-6 rounded-full w-6"></div>
             </d-horizontal-stack>
             <d-vertical-stack class="w-full" gap="0">
               <d-text size="l"></d-text>
               <d-text class="text-on-alt" size="s"></d-text>
               <d-text class="text-on-alt" size="xs"></d-text>
             </d-vertical-stack>
             <d-vertical-stack class="w-full" gap="0">
               <slot></slot>
             </d-vertical-stack>
           </d-vertical-stack>
         </div>
        </mock:shadow-root>
      </d-verification-card>
    `);
  });
});
