import { newSpecPage } from '@stencil/core/testing';
import { DCredentialOffer } from '../d-credential-offer';

describe('d-credential-offer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DCredentialOffer],
      html: `<d-credential-offer></d-credential-offer>`,
    });
    expect(page.root).toEqualHtml(`
      <d-credential-offer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-credential-offer>
    `);
  });
});
