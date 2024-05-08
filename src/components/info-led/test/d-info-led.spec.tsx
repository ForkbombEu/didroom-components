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
          <div class="bg-success border border-solid border-success h-[5px] rounded-full shrink-0 w-[5px]"></div>
        </mock:shadow-root>
      </d-info-led>
    `);
  });
});
