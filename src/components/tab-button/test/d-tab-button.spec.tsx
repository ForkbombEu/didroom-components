import { newSpecPage } from '@stencil/core/testing';
import { DTabButton } from '../d-tab-button';

describe('d-tab-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DTabButton],
      html: `<d-tab-button tab="home"></d-tab-button>`,
    });
    expect(page.root).toEqualHtml(`
      <d-tab-button tab="home">
       <mock:shadow-root>
         <ion-tab-button class="block h-12 text-on-alt min-w-12" href="/home" tab="home">
           <div class="relative w-fit">
              <d-icon icon="home" outline="" size="28"></d-icon>
            </div>
           <ion-label>
             <d-text class="capitalize font-medium leading-[normal] text-center text-on-alt text-xs" size="s">
               <slot></slot>
             </d-text>
           </ion-label>
         </ion-tab-button>
        </mock:shadow-root>
      </d-tab-button>
    `);
  });
});
