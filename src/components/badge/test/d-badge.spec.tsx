import { newSpecPage } from '@stencil/core/testing';
import { DBadge } from '../d-badge';

describe('d-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DBadge],
      html: `<d-badge></d-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <d-badge>
        <mock:shadow-root>
         <div class="bg-accent flex items-center justify-center px-2 py-0.5 rounded-md w-fit">
           <span class="font-normal leading-5 text-center text-on-accent text-sm">
             <slot></slot>
           </span>
         </div>
        </mock:shadow-root>
      </d-badge>
    `);
  });
});
