import { newSpecPage } from '@stencil/core/testing';
import { DCredentialDetail } from '../d-credential-detail';

describe('d-credential-detail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DCredentialDetail],
      html: `<d-credential-detail></d-credential-detail>`,
    });
    expect(page.root).toEqualHtml(`
      <d-credential-detail>
        <mock:shadow-root>
         <slot></slot>
         <div>
           <div class="heading">
             <d-avatar></d-avatar>
             <span class="name"></span>
           </div>
           <span class="description"></span>
           <span class="long-description"></span>
           <span class="issuer"></span>
           <div class="w-full">
             <d-button color="accent">
               generate qr
             </d-button>
           </div>
         </div>
        </mock:shadow-root>
      </d-credential-detail>
    `);
  });
});
