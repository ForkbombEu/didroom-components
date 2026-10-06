import { newSpecPage } from '@stencil/core/testing';
import { DVerificationCard } from '../d-verification-card';

describe('verification-card', () => {
  it('is a native, reversible selection control', async () => {
    const page = await newSpecPage({ components: [DVerificationCard], html: '<d-verification-card selected flow="Proof of age">Over 18: Yes</d-verification-card>' });
    const button = page.root.shadowRoot.querySelector('button');
    expect(button.type).toBe('button');
    expect(button.getAttribute('aria-pressed')).toBe('true');
    page.root.selected = false;
    await page.waitForChanges();
    expect(button.getAttribute('aria-pressed')).toBe('false');
  });
});
