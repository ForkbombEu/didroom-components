import { newSpecPage } from '@stencil/core/testing';
import { DTabPage } from '../d-tab-page';

describe('d-tab-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DTabPage],
      html: `<d-tab-page></d-tab-page>`,
    });
    expect(page.root).toEqualHtml(`
      <d-tab-page>
        <div class="ion-page">
          <d-header></d-header>
          <ion-content class="ion-padding" fullscreen="" id="main-content">
            <div class="pb-24"></div>
          </ion-content>
        </div>
      </d-tab-page>
    `);
  });
});
