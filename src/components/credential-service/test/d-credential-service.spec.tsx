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
          <div>
            <d-avatar size="l"></d-avatar>
            <div class="grow">
              <span class="name"></span>
              <span class="description"></span>
              <span class="issuer"></span>
            </div>
          </div>
        </mock:shadow-root>
      </d-credential-service>
    `);
  });
});
