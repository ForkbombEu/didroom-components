import { newSpecPage } from '@stencil/core/testing';
import { DDefinition } from '../d-definition';

describe('d-definition', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DDefinition],
      html: `<d-definition></d-definition>`,
    });
    expect(page.root).toEqualHtml(`
      <d-definition>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-definition>
    `);
  });
});
