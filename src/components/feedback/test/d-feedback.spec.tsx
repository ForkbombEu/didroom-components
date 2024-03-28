import { newSpecPage } from '@stencil/core/testing';
import { DFeedback } from '../d-feedback';

describe('d-feedback', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DFeedback],
      html: `<d-feedback></d-feedback>`,
    });
    expect(page.root).toEqualHtml(`
      <d-feedback>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-feedback>
    `);
  });
});
