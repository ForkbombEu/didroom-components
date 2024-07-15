import { newSpecPage } from '@stencil/core/testing';
import { DActivityCard } from '../d-activity-card';

describe('d-activity-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DActivityCard],
      html: `<d-activity-card></d-activity-card>`,
    });
    expect(page.root).toEqualHtml(`
      <d-activity-card>
        <mock:shadow-root>
          <div class="border-b border-stroke flex gap-4 items-start p-2 rounded-lg w-fit">
            <d-avatar shape="square"></d-avatar>
            <div class="flex flex-col gap-2">
              <h2></h2>
              <d-text class="text-on-alt" size="s"></d-text>
              <div class="flex gap-2.5 items-center">
                <d-info-led type="warning"></d-info-led>
                <d-text size="xs"></d-text>
              </div>
              <div class="flex gap-2.5 justify-end">
                <slot></slot>
              </div>
            </div>
         </div>
        </mock:shadow-root>
      </d-activity-card>
    `);
  });
});
