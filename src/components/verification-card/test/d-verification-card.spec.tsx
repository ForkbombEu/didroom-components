import { newSpecPage } from '@stencil/core/testing';
import { DVerificationCard } from '../d-verification-card';

describe('d-verification-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DVerificationCard],
      html: `<d-verification-card></d-verification-card>`,
    });
    expect(page.root).toEqualHtml(`
      <d-verification-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-verification-card>
    `);
  });
});
