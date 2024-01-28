import { newSpecPage } from '@stencil/core/testing';
import { DHeading } from '../d-heading';

describe('d-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DHeading],
      html: `<d-heading></d-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <d-heading color="primary" size="m">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-heading>
    `);
  });
});
