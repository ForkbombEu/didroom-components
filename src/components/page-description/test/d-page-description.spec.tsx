import { newSpecPage } from '@stencil/core/testing';
import { DPageDescription } from '../d-page-description';

describe('d-page-description', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DPageDescription],
      html: `<d-page-description></d-page-description>`,
    });
    expect(page.root).toEqualHtml(`
    <d-page-description>
        <mock:shadow-root>
          <d-heading class="font-semibold" size="xs"></d-heading>
          <d-text size="m">
              <p></p>
          </d-text>
        </mock:shadow-root>
      </d-page-description>
    `);
  });
});
