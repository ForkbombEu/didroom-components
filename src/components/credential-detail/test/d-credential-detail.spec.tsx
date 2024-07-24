import { newSpecPage } from '@stencil/core/testing';
import { DCredentialDetail } from '../d-credential-detail';

describe('d-credential-detail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DCredentialDetail],
      html: `<d-credential-detail></d-credential-detail>`,
    });
    expect(page.root).toEqualHtml(`
      <d-credential-detail class="bg-primary flex-col gap-2.5 inline-flex items-start px-0 py-5 rounded-lg w-full">
       <mock:shadow-root>
         <div class="bg-primary flex flex-col items-start px-5 py-0 w-full">
           <div class="flex font-semibold gap-2 items-center not-italic text-on text-xl">
             <span class="font-semibold leading-[20.5px] not-italic text-2xl text-on tracking-[-0.5px]"></span>
           </div>
           <div class="info">
             <span class="font-medium leading-[20.5px] not-italic text-base text-on tracking-[-0.5px]"></span>
             <div class="flex flex-col gap-4 items-start">
               <span class="font-normal leading-[150%] not-italic text-on-alt text-xs tracking-[-0.5px]"></span>
               <span class="font-normal leading-4 not-italic overflow-hidden self-stretch text-ellipsis text-on text-xs"></span>
             </div>
           </div>
           <div class="w-full">
             <slot></slot>
           </div>
         </div>
        </mock:shadow-root>
      </d-credential-detail>
    `);
  });
});
