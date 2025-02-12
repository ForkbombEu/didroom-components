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
        <div class="bg-primary flex flex-col items-center justify-center p-4 rounded-lg">
          <d-text class="line-clamp-1 mb-2 w-max" size="l">
             Verifier:
          </d-text>
          <div class="pb-2 w-full">
            <img alt="qrCode" class="w-full">
          </div>
          <d-text class="w-max" size="l">
            Session ID:
          </d-text>
          <d-heading size="s"></d-heading>
          <d-text size="m"></d-text>
        </div>
        </mock:shadow-root>
      </d-qr-code>
    `);
  });
});
