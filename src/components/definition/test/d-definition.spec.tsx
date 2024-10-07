import { newSpecPage } from '@stencil/core/testing';
import { DDefinition } from '../d-definition';

describe('d-definition', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DDefinition],
      html: `<d-definition></d-definition>`,
    });
    expect(page.root).toEqualHtml(`
      <d-definition class="border-b border-b-on-alt border-solid flex justify-between w-full">
       <mock:shadow-root>
         <div class="border-b border-b-on-alt border-solid flex justify-between w-full">
           <dl class="flex flex-col h-11 w-full">
             <dt class="font-normal leading-[150%] not-italic text-on-alt text-xs tracking-[-0.5px]"></dt>
             <dd class="font-medium leading-[150%] not-italic text-on text-xs tracking-[-0.5px]"></dd>
        </mock:shadow-root>
      </d-definition>
    `);
  });
});
