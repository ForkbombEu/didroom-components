import { newSpecPage } from '@stencil/core/testing';
import { DButton } from '../d-button';

describe('d-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DButton],
      html: `<d-button></d-button>`,
    });
    expect(page.root).toEqualHtml(`
     <d-button class="button button-default primary" color="primary">
       <mock:shadow-root>
         <button class="button-native primary" part="native" type="button">
           <span class="button-inner">
             <slot name="icon-only"></slot>
             <slot name="start"></slot>
             <slot></slot>
             <slot name="end"></slot>
           </span>
          </button>
        </mock:shadow-root>
      </d-button>

    `);
  });
});
