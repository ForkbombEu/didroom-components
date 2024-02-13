import { newSpecPage } from '@stencil/core/testing';
import { DidroomLogo } from '../didroom-logo';

describe('didroom-logo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DidroomLogo],
      html: `<didroom-logo></didroom-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <didroom-logo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </didroom-logo>
    `);
  });
});
