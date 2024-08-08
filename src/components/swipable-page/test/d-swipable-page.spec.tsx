import { newSpecPage } from '@stencil/core/testing';
import { DSwipablePage } from '../d-swipable-page';

describe('d-swipable-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DSwipablePage],
      html: `<d-swipable-page></d-swipable-page>`,
    });
    expect(page.root).toEqualHtml(`
      <d-swipable-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-swipable-page>
    `);
  });
});
