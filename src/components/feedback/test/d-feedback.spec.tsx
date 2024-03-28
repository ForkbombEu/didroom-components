import { newSpecPage } from '@stencil/core/testing';
import { DFeedback } from '../d-feedback';

describe('d-feedback', () => {
  it('renders close', async () => {
    const page = await newSpecPage({
      components: [DFeedback],
      html: `<d-feedback></d-feedback>`,
    });
    expect(page.root).toEqualHtml(`
      <d-feedback>
        <mock:shadow-root>
          <div class="border-success hidden">
           <div class="flex items-center justify-between self-stretch w-full">
             <div class="flex gap-2 items-center self-stretch">
               <div class="h-6 w-6">
                 <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                   <g id="check-circle">
                     <path clip-rule="evenodd" d="M12.0004 21.6004C14.5465 21.6004 16.9883 20.589 18.7886 18.7886C20.589 16.9883 21.6004 14.5465 21.6004 12.0004C21.6004 9.45431 20.589 7.01252 18.7886 5.21217C16.9883 3.41182 14.5465 2.40039 12.0004 2.40039C9.45431 2.40039 7.01252 3.41182 5.21217 5.21217C3.41182 7.01252 2.40039 9.45431 2.40039 12.0004C2.40039 14.5465 3.41182 16.9883 5.21217 18.7886C7.01252 20.589 9.45431 21.6004 12.0004 21.6004ZM16.4488 10.4488C16.6674 10.2225 16.7883 9.91935 16.7856 9.60471C16.7829 9.29007 16.6567 8.9891 16.4342 8.76661C16.2117 8.54412 15.9107 8.41792 15.5961 8.41518C15.2814 8.41245 14.9783 8.5334 14.752 8.75199L10.8004 12.7036L9.24879 11.152C9.02247 10.9334 8.71935 10.8124 8.40471 10.8152C8.09007 10.8179 7.7891 10.9441 7.56661 11.1666C7.34412 11.3891 7.21792 11.6901 7.21518 12.0047C7.21245 12.3193 7.3334 12.6225 7.55199 12.8488L9.95199 15.2488C10.177 15.4738 10.4822 15.6001 10.8004 15.6001C11.1186 15.6001 11.4238 15.4738 11.6488 15.2488L16.4488 10.4488Z" fill="#4ECB71" fill-rule="evenodd" id="Vector"></path>
                   </g>
                 </svg>
               </div>
               <d-text></d-text>
             </div>
             <button>
               <div class="h-5 w-5">
                 <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                   <g id="x">
                     <path clip-rule="evenodd" d="M4.29279 4.29259C4.48031 4.10512 4.73462 3.99981 4.99979 3.99981C5.26495 3.99981 5.51926 4.10512 5.70679 4.29259L9.99979 8.58559L14.2928 4.29259C14.385 4.19708 14.4954 4.1209 14.6174 4.06849C14.7394 4.01608 14.8706 3.9885 15.0034 3.98734C15.1362 3.98619 15.2678 4.01149 15.3907 4.06177C15.5136 4.11205 15.6253 4.18631 15.7192 4.2802C15.8131 4.37409 15.8873 4.48574 15.9376 4.60864C15.9879 4.73154 16.0132 4.86321 16.012 4.99599C16.0109 5.12877 15.9833 5.25999 15.9309 5.382C15.8785 5.504 15.8023 5.61435 15.7068 5.70659L11.4138 9.99959L15.7068 14.2926C15.8889 14.4812 15.9897 14.7338 15.9875 14.996C15.9852 15.2582 15.88 15.509 15.6946 15.6944C15.5092 15.8798 15.2584 15.985 14.9962 15.9873C14.734 15.9895 14.4814 15.8888 14.2928 15.7066L9.99979 11.4136L5.70679 15.7066C5.51818 15.8888 5.26558 15.9895 5.00339 15.9873C4.74119 15.985 4.49038 15.8798 4.30497 15.6944C4.11956 15.509 4.01439 15.2582 4.01211 14.996C4.00983 14.7338 4.11063 14.4812 4.29279 14.2926L8.58579 9.99959L4.29279 5.70659C4.10532 5.51907 4 5.26476 4 4.99959C4 4.73443 4.10532 4.48012 4.29279 4.29259Z" fill="#F7FAFF" fill-rule="evenodd" id="Vector"></path>
                   </g>
                 </svg>
               </div>
             </button>
           </div>
         </div>
        </mock:shadow-root>
      </d-feedback>
    `);
  });
});
