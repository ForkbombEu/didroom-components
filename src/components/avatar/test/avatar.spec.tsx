import { newSpecPage } from '@stencil/core/testing';
import { Avatar } from '../avatar';

describe('d-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Avatar],
      html: `<d-avatar></d-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <d-avatar role="figure" shape="round" size="m">
        <mock:shadow-root>
          <d-icon icon="profile" size="28"></d-icon>
        </mock:shadow-root>
      </d-avatar>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Avatar],
      html: `<d-avatar name="Maccio Capatonda"></d-avatar>`,
    });
    expect(root).toEqualHtml(`
    <d-avatar aria-label="Maccio Capatonda" name="Maccio Capatonda" role="figure" shape="round" size="m">
      <mock:shadow-root>
        <span class="font-medium uppercase">
          MC
        </span>
      </mock:shadow-root>
    </d-avatar>
    `);
  });

  it('renders with shape and icon', async () => {
    const { root } = await newSpecPage({
      components: [Avatar],
      html: `<d-avatar shape="square" name=""></d-avatar>`,
    });
    expect(root).toEqualHtml(`
    <d-avatar aria-label="" role="figure" shape="square" size="m">
      <mock:shadow-root>
        <d-icon icon="profile" size="28"></d-icon>
    </mock:shadow-root>
    </d-avatar>
    `);
  });
});
