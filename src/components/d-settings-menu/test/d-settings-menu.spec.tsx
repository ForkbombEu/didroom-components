import { newSpecPage } from '@stencil/core/testing';
import { DSettingsMenu } from '../d-settings-menu';

describe('d-settings-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DSettingsMenu],
      html: `<d-settings-menu></d-settings-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <d-settings-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-settings-menu>
    `);
  });
});
