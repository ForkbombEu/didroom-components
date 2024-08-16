import { newSpecPage } from '@stencil/core/testing';
import { DVerticalStack } from '../d-vertical-stack';

describe('d-vertical-stack', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DVerticalStack],
      html: `<d-vertical-stack></d-vertical-stack>`,
    });
    expect(page.root).toEqualHtml(`
      <d-vertical-stack>
        <mock:shadow-root>
          <div class="flex flex-col gap-2">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </d-vertical-stack>
    `);
  });
});
