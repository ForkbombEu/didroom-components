import { newSpecPage } from '@stencil/core/testing';
import { DButton } from '../d-button';

describe('d-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DButton],
      html: `<d-button></d-button>`,
    });
    expect(page.root).toEqualHtml(`
      <d-button>
        <mock:shadow-root>
          <button class="primary"> 
            <slot></slot>
          </button>
        </mock:shadow-root>
      </d-button>
    `);
  });
});
