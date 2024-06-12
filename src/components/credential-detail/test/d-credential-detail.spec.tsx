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
         <div class="frame">
            <div class="heading">
              <span class="name"></span>
            </div>
           <div class="info">
             <span class="short-description"></span>
             <div class="details">
               <span class="long-description"></span>
               <span class="issuer"></span>
             </div>
           </div>
           <div class="w-full">
             <slot></slot>
           </div>
         </div>
        </mock:shadow-root>
      </d-credential-detail>
    `);
  });
});
