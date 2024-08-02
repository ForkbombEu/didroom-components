import { newSpecPage } from '@stencil/core/testing';
import { DList } from '../d-list';

describe('d-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DList],
      html: `<d-list></d-list>`,
    });
    expect(page.root).toEqualHtml(`
      <d-list>
        <mock:shadow-root>
          <div class="flex flex-col gap-2">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </d-list>
    `);
  });
});
