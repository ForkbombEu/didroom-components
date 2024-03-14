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
            <div class="flex flex-col grow">
              <d-text size="l"></d-text>
              <d-text size="s"></d-text>
              <d-text size="xs"></d-text>
            </div>
          </div>
        </mock:shadow-root>
      </d-credential-service>
    `);
  });
});
