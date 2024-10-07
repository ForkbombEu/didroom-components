import { newSpecPage } from '@stencil/core/testing';
import { DHorizontalStack } from '../d-horizontal-stack';

describe('d-horizontal-stack', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DHorizontalStack],
      html: `<d-horizontal-stack></d-horizontal-stack>`,
    });
    expect(page.root).toEqualHtml(`
     <d-horizontal-stack class="flex flex-row gap-2">
      <mock:shadow-root>
        <slot></slot>
        </mock:shadow-root>
      </d-horizontal-stack>
    `);
  });
});
