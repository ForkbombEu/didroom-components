import { newSpecPage } from '@stencil/core/testing';
import { DLogo } from '../d-logo';

describe('d-logo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DLogo],
      html: `<d-logo></d-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <d-logo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-logo>
    `);
  });
});
