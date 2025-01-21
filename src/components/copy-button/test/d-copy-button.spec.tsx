import { newSpecPage } from '@stencil/core/testing';
import { DCopyButton } from '../d-copy-button';

describe('d-copy-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DCopyButton],
      html: `<d-copy-button></d-copy-button>`,
    });
    expect(page.root).toEqualHtml(`
      <d-copy-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-copy-button>
    `);
  });
});
