import { newSpecPage } from '@stencil/core/testing';
import { DCredentialCard } from '../d-credential-card';

describe('credential-card', () => {
  it('keeps readable expiry labels and a stable background after updates', async () => {
    const page = await newSpecPage({ components: [DCredentialCard], html: '<d-credential-card name="Proof of age" expiration-label="Expires" expiration-date="1 Jan 2030"></d-credential-card>' });
    const card = page.root.shadowRoot.querySelector('.main');
    const background = card.className;
    expect(card.textContent).toContain('Expires');
    expect(card.textContent).toContain('1 Jan 2030');
    page.root.name = 'Updated display name';
    await page.waitForChanges();
    expect(card.className).toBe(background);
  });
});
