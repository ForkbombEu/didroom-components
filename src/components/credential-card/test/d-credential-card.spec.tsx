import { newSpecPage } from '@stencil/core/testing';
import { DCredentialCard } from '../d-credential-card';

describe('d-credential-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DCredentialCard],
      html: `<d-credential-card></d-credential-card>`,
    });
    expect(page.root).toEqualHtml(`
      <d-credential-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-credential-card>
    `);
  });
});
