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
         <svg class="absolute text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path clip-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fill-rule="evenodd"></path>
         </svg>
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
    <d-avatar aria-label="" name="" role="figure" shape="square" size="m">
       <mock:shadow-root>
         <svg class="absolute text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path clip-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fill-rule="evenodd"></path>
         </svg>
       </mock:shadow-root>
    </d-avatar>
    `);
  });
});
