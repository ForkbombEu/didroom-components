import { newSpecPage } from '@stencil/core/testing';
import { DSwipablePage } from '../d-swipable-page';

describe('swipable-page', () => {
  it('keeps onboarding benefits prominent without extra punctuation', async () => {
    const page = await newSpecPage({ components: [DSwipablePage], html: '<d-swipable-page title="Choose what to share" description="Review before confirming."></d-swipable-page>' });
    const heading = page.root.shadowRoot.querySelector('d-heading');
    expect(heading.textContent).toBe('Choose what to share');
    expect(heading.getAttribute('level')).toBe('1');
    expect(page.root.shadowRoot.querySelector('d-background-illustration').hasAttribute('compact')).toBe(true);
  });
});
