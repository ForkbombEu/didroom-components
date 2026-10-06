import { newSpecPage } from '@stencil/core/testing';
import { DListItem } from '../d-list-item';

describe('d-list-item', () => {
  it('keeps service links named and includes issuer organization', async () => {
    const page = await newSpecPage({ components: [DListItem], html: '<d-list-item name="Proof of age" issuer="Example issuer" href="/offer"><span slot="organization">University</span></d-list-item>' });
    expect(page.root.shadowRoot.querySelector('a').getAttribute('href')).toBe('/offer');
    expect(page.root.shadowRoot.querySelector('slot[name="organization"]')).not.toBeNull();
  });
});
