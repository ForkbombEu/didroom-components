import { newSpecPage } from '@stencil/core/testing';
import { DListItem } from '../d-list-item';

describe('d-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DListItem],
      html: `<d-list-item></d-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <d-list-item>
       <mock:shadow-root>
         <div class="flex gap-3 items-center no-underline p-5 rounded-lg w-full">
           <div class="flex flex-grow gap-3 items-start">
             <d-avatar shape="square" size="l"></d-avatar>
             <div class="flex flex-col grow h-full justify-between min-h-[60px]">
               <d-text size="l"></d-text>
               <d-text class="!text-on-alt"></d-text>
               <slot name="date"></slot>
             </div>
           </div>
         </div>
       </mock:shadow-root>
      </d-list-item>
    `);
  });
});
