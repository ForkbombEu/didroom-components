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
               <ion-title class="text-center">
                 <slot></slot>
               </ion-title>
             </ion-toolbar>
           </ion-header>
           <ion-modal>
             <ion-header>
               <ion-toolbar>
                 <ion-title>
                   <d-heading size="s">
                     Settings
                   </d-heading>
                 </ion-title>
                 <ion-buttons slot="end">
                   <ion-button aria-hidden="">
                     Close
                   </ion-button>
                 </ion-buttons>
               </ion-toolbar>
             </ion-header>
             <ion-content class="ion-padding">
               <slot name="settings"></slot>
             </ion-content>
           </ion-modal>
         </div>
       </mock:shadow-root>
      </d-header>
    `);
  });
});
