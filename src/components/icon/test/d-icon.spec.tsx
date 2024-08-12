import { newSpecPage } from '@stencil/core/testing';
import { DIcon } from '../d-icon';

describe('d-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DIcon],
      html: `<d-icon></d-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <d-icon>
        <mock:shadow-root>
          <svg fill="currentColor" height="24" stroke="none" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
        </mock:shadow-root>
      </d-icon>
    `);
  });
});
