import { newSpecPage } from '@stencil/core/testing';
import { DCheckbox } from '../d-checkbox';

describe('d-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DCheckbox],
      html: `<d-checkbox></d-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <d-checkbox>
        <mock:shadow-root>
          <d-vertical-stack>
           <d-horizontal-stack class="items-center">
             <ion-checkbox></ion-checkbox>
             <div>
               <slot></slot>
             </div>
           </d-horizontal-stack>
         </d-vertical-stack>
        </mock:shadow-root>
      </d-checkbox>
    `);
  });
});
