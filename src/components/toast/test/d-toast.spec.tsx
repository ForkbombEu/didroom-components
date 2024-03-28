import { newSpecPage } from '@stencil/core/testing';
import { DToast } from '../d-toast';

describe('d-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DToast],
      html: `<d-toast></d-toast>`,
    });
    expect(page.root).toEqualHtml(`
      <d-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-toast>
    `);
  });
});
