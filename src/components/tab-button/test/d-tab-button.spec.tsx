import { newSpecPage } from '@stencil/core/testing';
import { DTabButton } from '../d-tab-button';

describe('d-tab-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DTabButton],
      html: `<d-tab-button tab="home"></d-tab-button>`,
    });
    expect(page.root).toEqualHtml(`
      <d-tab-button tab="home">
       <mock:shadow-root>
         <ion-tab-button class="text-on-alt" href="/home" tab="home">
           <svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg">
             <g id="Icon / outline / home">
               <path d="M14 4.25C14.35 4.25 14.6875 4.35916 14.9618 4.55665L23.1284 10.4366C23.3249 10.5781 23.4816 10.7595 23.5885 10.9647L24.2537 10.6182L23.5885 10.9647C23.6952 11.1697 23.75 11.3939 23.75 11.62V22.26C23.75 22.6451 23.5909 23.0209 23.2972 23.3029C23.0024 23.5859 22.5962 23.75 22.1667 23.75H17.6167C17.4656 23.75 17.3265 23.6921 17.2286 23.5981C17.1318 23.5051 17.0833 23.3857 17.0833 23.268V17.78C17.0833 16.9769 16.7507 16.2132 16.1693 15.655C15.5889 15.0979 14.8081 14.79 14 14.79C13.1919 14.79 12.4111 15.0979 11.8307 15.655C11.2493 16.2132 10.9167 16.9769 10.9167 17.78V23.268C10.9167 23.3857 10.8682 23.5051 10.7714 23.5981C10.6735 23.6921 10.5344 23.75 10.3833 23.75H5.83333C5.40375 23.75 4.99762 23.5859 4.70282 23.3029C4.40906 23.0209 4.25 22.6451 4.25 22.26V11.62C4.25 11.3939 4.30475 11.1697 4.41152 10.9647C4.51838 10.7595 4.67507 10.5781 4.87156 10.4367L4.43333 9.828L4.87156 10.4367L13.0382 4.55665C13.3125 4.35916 13.65 4.25 14 4.25Z" id="Vector" stroke="currentColor" stroke-width="1.5"></path>
             </g>
           </svg>
           <ion-label>
             <d-text class="[font-family:Montserrat] capitalize font-medium leading-[normal] text-center text-on-alt text-xs" size="s">
               <slot></slot>
             </d-text>
           </ion-label>
         </ion-tab-button>
        </mock:shadow-root>
      </d-tab-button>
    `);
  });
});
