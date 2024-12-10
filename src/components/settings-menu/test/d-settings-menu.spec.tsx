import { newSpecPage } from '@stencil/core/testing';
import { DSettingsMenu } from '../d-settings-menu';

describe('d-settings-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DSettingsMenu],
      html: `<d-settings-menu></d-settings-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <d-settings-menu>
        <mock:shadow-root>
          <div class="flex flex-col justify-between">
           <div class="flex flex-col gap-4">
             <d-buttons-group>
               <d-button aria-hidden="" size="large">
                 <d-icon icon="profile" outline="" slot="start"></d-icon>
               </d-button>
               <d-button aria-hidden="" size="large">
                 <d-icon icon="notification" outline="" slot="start"></d-icon>
               </d-button>
               <d-button aria-hidden="" size="large">
                 <d-icon icon="language" outline="" slot="start"></d-icon>
               </d-button>
             </d-buttons-group>
             <d-buttons-group>
               <d-button href="https://didroom.com/guides/Orgadmin/support.html" size="large">
                 <d-icon icon="help" outline="" slot="start"></d-icon>
               </d-button>
               <d-button href="https://didroom.com/guides/Terms-and-conditions/privacy-policy.html" size="large">
                 <d-icon icon="shield" outline="" slot="start"></d-icon>
               </d-button>
             </d-buttons-group>
             <d-buttons-group>
               <d-button aria-hidden="" size="large">
                 <d-icon icon="logout" outline="" slot="start"></d-icon>
               </d-button>
             </d-buttons-group>
           </div>
           <d-app-details></d-app-details>
         </div>
        </mock:shadow-root>
      </d-settings-menu>
    `);
  });
});
