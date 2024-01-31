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
        </mock:shadow-root>
      </d-credential-detail>
    `);
  });
});
