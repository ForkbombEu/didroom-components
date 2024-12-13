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
         <d-list-item>
            <div slot="date">
              <div class="flex gap-2.5 items-center">
                <d-info-led type="warning"></d-info-led>
                <d-text class="!text-on-alt" size="xs"></d-text>
              </div>
            </div>
         </d-list-item>
        </mock:shadow-root>
      </d-activity-card>
    `);
  });
});
