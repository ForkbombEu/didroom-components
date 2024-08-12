import { newSpecPage } from '@stencil/core/testing';
import { DSwipablePage } from '../d-swipable-page';

describe('d-swipable-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DSwipablePage],
      html: `<d-swipable-page></d-swipable-page>`,
    });
    expect(page.root).toEqualHtml(`
      <d-swipable-page>
        <mock:shadow-root>
        <div class="flex flex-col justify-between">
           <d-background-illustration>
             <slot></slot>
           </d-background-illustration>
           <div class="flex flex-col gap-4 px-4">
             <d-heading size="s">
               ,
             </d-heading>
             <d-text size="m"></d-text>
           </div>
         </div>
        </mock:shadow-root>
      </d-swipable-page>
    `);
  });
});
