import { newSpecPage } from '@stencil/core/testing';
import { DIllustration } from '../d-illustration';

describe('d-illustration', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DIllustration],
      html: `<d-illustration></d-illustration>`,
    });
    expect(page.root).toEqualHtml(`
      <d-illustration>
        <mock:shadow-root>
        </mock:shadow-root>
      </d-illustration>
    `);
  });
});
