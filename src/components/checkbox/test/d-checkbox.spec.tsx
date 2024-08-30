import { newSpecPage } from '@stencil/core/testing';
import { DCheckbox } from '../d-checkbox';

describe('d-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DCheckbox],
      html: `<d-checkbox></d-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <d-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-checkbox>
    `);
  });
});
