import { newSpecPage } from '@stencil/core/testing';
import { DScanButton } from '../d-scan-button';

describe('d-scan-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DScanButton],
      html: `<d-scan-button></d-scan-button>`,
    });
    expect(page.root).toEqualHtml(`
      <d-scan-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-scan-button>
    `);
  });
});
