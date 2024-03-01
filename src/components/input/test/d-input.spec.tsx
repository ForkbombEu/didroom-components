import { newSpecPage } from '@stencil/core/testing';
import { DInput } from '../d-input';

describe('d-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DInput],
      html: `<d-input></d-input>`,
    });
    expect(page.root).toEqualHtml(`
      <d-input type="text">
        <mock:shadow-root>
         <d-text class="label" size="m"></d-text>
         <ion-input class="input" fill="outline" type="text"></ion-input>
          <slot></slot>
        </mock:shadow-root>
      </d-input>
    `);
  });
});
