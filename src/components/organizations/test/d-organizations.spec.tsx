import { newSpecPage } from '@stencil/core/testing';
import { DOrganizations } from '../d-organizations';

describe('d-organizations', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DOrganizations],
      html: `<d-organizations></d-organizations>`,
    });
    expect(page.root).toEqualHtml(`
      <d-organizations class="flex flex-col items-center">
        <mock:shadow-root>
          <d-heading class="block text-center w-full" size="xs"></d-heading>
          <div class="flex flex-wrap gap-4 items-center mt-8 mx-auto space-x-6 w-11/12">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </d-organizations>
    `);
  });
});
