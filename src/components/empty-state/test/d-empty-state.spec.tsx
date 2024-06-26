import { newSpecPage } from '@stencil/core/testing';
import { DEmptyState } from '../d-empty-state';

describe('d-empty-state', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DEmptyState],
      html: `<d-empty-state></d-empty-state>`,
    });
    expect(page.root).toEqualHtml(`
      <d-empty-state>
        <mock:shadow-root>
         <div class="flex flex-col gap-4 items-center justify-center">
           <div>
             <slot></slot>
           </div>
           <div class="flex flex-col gap-1">
             <d-heading size="s"></d-heading>
             <d-text size="l"></d-text>
           </div>
         </div>
        </mock:shadow-root>
      </d-empty-state>
    `);
  });
});
