import { newSpecPage } from '@stencil/core/testing';
import { DCredentialService } from '../d-credential-service';

describe('d-credential-service', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DCredentialService],
      html: `<d-credential-service></d-credential-service>`,
    });
    expect(page.root).toEqualHtml(`
      <d-credential-service>
       <mock:shadow-root>
         <d-list-item background="">
           <div slot="organization">
             <d-text class="!text-on-alt" size="s"></d-text>
           </div>
         </d-list-item>
       </mock:shadow-root>
      </d-credential-service>
    `);
  });
});
