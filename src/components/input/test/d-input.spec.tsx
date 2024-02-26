import { newSpecPage } from '@stencil/core/testing';
import { DInput } from '../d-input';

describe('d-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DInput],
      html: `<d-input></d-input>`,
    });
    expect(page.root).toEqualHtml(`
      <d-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-input>
    `);
  });
});
