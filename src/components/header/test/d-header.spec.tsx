import { newSpecPage } from '@stencil/core/testing';
import { DHeader } from '../d-header';

describe('d-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DHeader],
      html: `<d-header></d-header>`,
    });
    expect(page.root).toEqualHtml(`
      <d-header>
        <mock:shadow-root>
         <div>
           <ion-header class="shadow-none" translucent="">
             <ion-toolbar>
               <ion-title class="text-center uppercase bg-surface">
                <span>
                  <slot></slot>
                </span>
               </ion-title>
             </ion-toolbar>
           </ion-header>
         </div>
       </mock:shadow-root>
      </d-header>
    `);
  });
});
