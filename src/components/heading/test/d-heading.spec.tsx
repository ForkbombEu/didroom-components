import { newSpecPage } from '@stencil/core/testing';
import { DHeading } from '../d-heading';

describe('heading', () => {
  it('exposes a named heading with configurable hierarchy', async () => {
    const page = await newSpecPage({ components: [DHeading], html: '<d-heading level="1" size="s">Sign in</d-heading>' });
    expect(page.root.getAttribute('role')).toBe('heading');
    expect(page.root.getAttribute('aria-level')).toBe('1');
    expect(page.root.textContent).toBe('Sign in');
  });
});
