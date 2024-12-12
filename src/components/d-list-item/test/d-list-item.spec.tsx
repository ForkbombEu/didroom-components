import { newSpecPage } from '@stencil/core/testing';
import { DListItem } from '../d-list-item';

describe('d-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DListItem],
      html: `<d-list-item></d-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <d-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-list-item>
    `);
  });
});
