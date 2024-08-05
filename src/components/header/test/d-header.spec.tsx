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
               <ion-title class="text-center uppercase">
                <span>
                  <slot></slot>
                </span>
               </ion-title>
             </ion-toolbar>
           </ion-header>
           <ion-menu content-id="main-content">
             <ion-header>
               <ion-toolbar>
                 <ion-title>
                   Settings
                 </ion-title>
               </ion-toolbar>
             </ion-header>
             <ion-content>
               <div class="px-4 py-2">
                 <slot name="settings"></slot>
               </div>
             </ion-content>
           </ion-menu>
         </div>
       </mock:shadow-root>
      </d-header>
    `);
  });
});
