import { newSpecPage } from '@stencil/core/testing';
import { DInfoLed } from '../d-info-led';

describe('d-info-led', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DInfoLed],
      html: `<d-info-led></d-info-led>`,
    });
    expect(page.root).toEqualHtml(`
      <d-info-led>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-info-led>
    `);
  });
});
