import { newSpecPage } from '@stencil/core/testing';
import { DLoading } from '../d-loading';

describe('d-loading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DLoading],
      html: `<d-loading></d-loading>`,
    });
    expect(page.root).toEqualHtml(`
      <d-loading>
        <mock:shadow-root></mock:shadow-root>
      </d-loading>
    `);
  });
});
