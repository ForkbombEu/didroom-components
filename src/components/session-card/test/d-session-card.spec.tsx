import { newSpecPage } from '@stencil/core/testing';
import { DSessionCard } from '../d-session-card';

describe('d-session-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DSessionCard],
      html: `<d-session-card></d-session-card>`,
    });
    expect(page.root).toEqualHtml(`
      <d-session-card>
        <mock:shadow-root>
         <div class="align-middle flex flex-col gap-8 items-center w-52">
           <span class="border-4 border-error h-24 rounded-full text-error w-24">
            <d-icon icon="close" outline="" size="88"></d-icon>
           </span>
           <d-heading class="text-on" size="xs">
             Failure.
           </d-heading>
           <div class="bg-primary flex flex-col gap-1 items-center p-4 rounded-lg">
             <d-text>
               Session id:
             </d-text>
             <d-heading class="text-error" size="xl"></d-heading>
             <d-text></d-text>
           </div>
         </div>
       </mock:shadow-root>
      </d-session-card>
    `);
  });
});
