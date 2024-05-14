import { newSpecPage } from '@stencil/core/testing';
import { DButtonsGroup } from '../d-buttons-group';

describe('d-buttons-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DButtonsGroup],
      html: `<d-buttons-group></d-buttons-group>`,
    });
    expect(page.root).toEqualHtml(`
      <d-buttons-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-buttons-group>
    `);
  });
});
