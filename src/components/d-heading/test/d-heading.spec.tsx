import { newSpecPage } from '@stencil/core/testing';
import { DHeading } from '../d-heading';

describe('d-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DHeading],
      html: `<d-heading></d-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <d-heading>
        <mock:shadow-root>
          <h3 class="m">
            <slot></slot>
          </h3>
        </mock:shadow-root>
      </d-heading>
    `);
  });
});
