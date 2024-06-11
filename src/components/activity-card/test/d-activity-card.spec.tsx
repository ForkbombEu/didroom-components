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
          <slot></slot>
        </mock:shadow-root>
      </d-activity-card>
    `);
  });
});
