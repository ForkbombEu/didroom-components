import { newSpecPage } from '@stencil/core/testing';
import { DText } from '../d-text';

describe('d-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DText],
      html: `<d-text></d-text>`,
    });
    expect(page.root).toEqualHtml(`
      <d-text color="primary" size="m">
        <mock:shadow-root>
            <slot></slot>
        </mock:shadow-root>
      </d-text>
    `);
  });
});
