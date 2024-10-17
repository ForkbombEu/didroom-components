import { newSpecPage } from '@stencil/core/testing';
import { DScannerMask } from '../d-scanner-mask';

describe('d-scanner-mask', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DScannerMask],
      html: `<d-scanner-mask></d-scanner-mask>`,
    });
    expect(page.root).toEqualHtml(`
      <d-scanner-mask>
        <mock:shadow-root>
          <div class="fixed flex flex-col h-screen items-center justify-center left-0 top-0 visible w-full z-40">
           <div class="bg-opacity-70 bg-[#e9ebef] dark:bg-[#253151] flex-grow min-h-24 w-full"></div>
           <div class="flex h-72 w-full">
             <div class="bg-opacity-70 bg-[#e9ebef] dark:bg-[#253151] flex-grow h-full max-w-1/4"></div>
             <div class="bg-transparent h-72 overflow-hidden relative rounded-md viewfinder w-72 z-50">
               <div class="absolute border-8 border-accent h-full left-0 top-0 w-full"></div>
               <div class="-translate-y-1/2 absolute bg-accent h-1 left-0 top-1/2 transform w-full" style="transform: translateY(-138px);"></div>
             </div>
             <div class="bg-opacity-70 bg-[#e9ebef] dark:bg-[#253151] flex-grow h-full"></div>
           </div>
           <div class="bg-opacity-70 bg-[#e9ebef] dark:bg-[#253151] flex-grow w-full">
             <div class="justify-center text-center">
               <d-page-description></d-page-description>
             </div>
           </div>
         </div>
        </mock:shadow-root>
      </d-scanner-mask>
    `);
  });
});
