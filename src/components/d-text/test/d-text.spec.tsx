import { newSpecPage } from '@stencil/core/testing';
import { DText } from '../d-text';

describe('d-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DText],
      html: `<d-text></d-text>`,
    });
    expect(page.root).toEqualHtml(`
      <d-text>
        <mock:shadow-root>
          <span class="m">
            <slot></slot>
          </span>
        </mock:shadow-root>
      </d-text>
    `);
  });
});
