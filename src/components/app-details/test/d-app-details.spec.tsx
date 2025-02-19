import { newSpecPage } from '@stencil/core/testing';
import { DAppDetails } from '../d-app-details';

describe('d-app-details', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DAppDetails],
      html: `<d-app-details></d-app-details>`,
    });
    expect(page.root).toEqualHtml(`
      <d-app-details>
        <mock:shadow-root>
          <div class="flex flex-col gap-2 items-center p-6">
            <d-text size="l">
              Developed by Forkbomb BV
            </d-text>
            <d-text size="m">
              v
            </d-text>
          </div>
        </mock:shadow-root>
      </d-app-details>
    `);
  });
});
