import { newSpecPage } from '@stencil/core/testing';
import { DBackgroundIllustration } from '../d-background-illustration';

describe('d-background-illustration', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DBackgroundIllustration],
      html: `<d-background-illustration></d-background-illustration>`,
    });
    expect(page.root).toEqualHtml(`
       <d-background-illustration class="block fill-highlight h-fit max-h-[50vh] opacity-50 relative shrink-0 w-full" style="background-image: url(undefined); background-size: cover; background-position: center;">
          <div class="w-full">
            <div class="max-w-96 mx-auto w-fit"></div>
          </div>
        </d-background-illustration>
    `);
  });
});
