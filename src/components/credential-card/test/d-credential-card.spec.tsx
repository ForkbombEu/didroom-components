import { newSpecPage } from '@stencil/core/testing';
import { DCredentialCard } from '../d-credential-card';

describe('d-credential-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DCredentialCard],
      html: `<d-credential-card></d-credential-card>`,
    });
    expect(page.root).toEqualHtml(`
      <d-credential-card style="background-image: url(/assets/rect-dark.png);">
        <mock:shadow-root>
          <div class="between">
            <div class="info">
              <div class="heading">
                <d-avatar></d-avatar>
                <span class="name"></span>
              </div>
              <span class="description"></span>
            </div>
          </div>
          <div class="between">
            <div class="labeled-text">
              <span class="label">
                Issued by
              </span>
              <span></span>
            </div>
            <div class="items-end labeled-text">
              <span class="label">
                Exp
              </span>
              <span></span>
            </div>
          </div>
        </mock:shadow-root>
      </d-credential-card>
    `);
  });
});
