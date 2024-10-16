import { newSpecPage } from '@stencil/core/testing';
import { DScannerMask } from '../d-scanner-mask';

describe('d-scanner-mask', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DScannerMask],
      html: `<d-scanner-mask></d-scanner-mask>`,
    });
    expect(page.root).toEqualHtml(`
      <d-scanner-mask>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-scanner-mask>
    `);
  });
});
