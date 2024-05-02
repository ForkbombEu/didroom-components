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
          <div class="align-middle flex flex-col gap-4 items-center w-52">
           <svg fill="none" height="88" viewBox="0 0 89 88" width="89" xmlns="http://www.w3.org/2000/svg">
             <g clip-path="url(#clip0_3625_37654)">
               <g clip-path="url(#clip1_3625_37654)">
                 <path d="M44 1C19.6996 1 0 20.4758 0 44.5C0 68.5256 19.6996 88 44 88C68.3018 88 88 68.5256 88 44.5C88 20.4758 68.3018 1 44 1ZM44 82.6481C22.7714 82.6481 5.5 65.4874 5.5 44.4998C5.5 23.5124 22.7714 6.43733 44 6.43733C65.2286 6.43733 82.5 23.5125 82.5 44.4998C82.5 65.4871 65.2286 82.6481 44 82.6481Z" fill="#FF6681"></path>
               </g>
               <path clip-rule="evenodd" d="M25.7927 26.4994C26.9383 25.3669 28.7956 25.3669 29.9411 26.4994L62.5744 58.7619C63.72 59.8944 63.72 61.7306 62.5744 62.8631C61.4289 63.9957 59.5716 63.9957 58.4261 62.8631L25.7927 30.6006C24.6472 29.4681 24.6472 27.6319 25.7927 26.4994Z" fill="#FF6681" fill-rule="evenodd"></path>
               <path clip-rule="evenodd" d="M62.574 26.4994C61.4284 25.3669 59.5711 25.3669 58.4256 26.4994L25.7923 58.7619C24.6467 59.8944 24.6467 61.7306 25.7923 62.8631C26.9378 63.9957 28.7951 63.9957 29.9406 62.8631L62.574 30.6006C63.7195 29.4681 63.7195 27.6319 62.574 26.4994Z" fill="#FF6681" fill-rule="evenodd"></path>
             </g>
             <defs>
               <clipPath id="clip0_3625_37654">
                 <rect fill="white" height="88" transform="translate(0.5)" width="88"></rect>
               </clipPath>
               <clipPath id="clip1_3625_37654">
                 <rect fill="white" height="87" transform="translate(0 1)" width="88"></rect>
               </clipPath>
             </defs>
           </svg>
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
