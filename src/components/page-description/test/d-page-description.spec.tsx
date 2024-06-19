import { newSpecPage } from '@stencil/core/testing';
import { DPageDescription } from '../d-page-description';

describe('d-page-description', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DPageDescription],
      html: `<d-page-description></d-page-description>`,
    });
    expect(page.root).toEqualHtml(`
      <d-page-description>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-page-description>
    `);
  });
});
