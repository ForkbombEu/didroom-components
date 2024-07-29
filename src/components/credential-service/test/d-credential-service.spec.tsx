import { newSpecPage } from '@stencil/core/testing';
import { DCredentialService } from '../d-credential-service';

describe('d-credential-service', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DCredentialService],
      html: `<d-credential-service></d-credential-service>`,
    });
    expect(page.root).toEqualHtml(`
      <d-credential-service>
        <mock:shadow-root>
          <div class="bg-primary flex gap-3 items-center no-underline p-5 rounded-lg w-full">
            <div class="flex flex-grow gap-3 items-start">
              <d-avatar shape="square" size="l"></d-avatar>
              <div class="flex flex-col grow h-full justify-between min-h-[60px]">
                <d-text size="l"></d-text>
                <d-text class="!text-on-alt">
                </d-text>
              </div>
            </div>
          </div>
       </mock:shadow-root>
      </d-credential-service>
    `);
  });
});
