import { newSpecPage } from '@stencil/core/testing';
import { DBadge } from '../d-badge';

describe('d-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DBadge],
      html: `<d-badge></d-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <d-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-badge>
    `);
  });
});
