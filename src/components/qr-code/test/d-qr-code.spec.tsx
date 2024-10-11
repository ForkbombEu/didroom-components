import { newSpecPage } from '@stencil/core/testing';
import { DQrCode } from '../d-qr-code';

describe('d-qr-code', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DQrCode],
      html: `<d-qr-code></d-qr-code>`,
    });
    expect(page.root).toEqualHtml(`
      <d-qr-code>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-qr-code>
    `);
  });
});
