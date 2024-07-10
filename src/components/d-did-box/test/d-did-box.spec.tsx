import { newSpecPage } from '@stencil/core/testing';
import { DDidBox } from '../d-did-box';

describe('d-did-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DDidBox],
      html: `<d-did-box></d-did-box>`,
    });
    expect(page.root).toEqualHtml(`
      <d-did-box>
        <mock:shadow-root></mock:shadow-root>
      </d-did-box>
    `);
  });
});
