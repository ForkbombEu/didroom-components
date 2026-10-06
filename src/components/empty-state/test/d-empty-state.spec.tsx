import { newSpecPage } from '@stencil/core/testing';
import { DEmptyState } from '../d-empty-state';

describe('empty-state', () => {
  it('renders the first-credential action from kebab-case attributes', async () => {
    const page = await newSpecPage({ components: [DEmptyState], html: '<d-empty-state heading="No credentials" button-text="Get credentials" button-color="accent" href="/en/home"></d-empty-state>' });
    const button = page.root.shadowRoot.querySelector('d-button');
    expect(button.textContent).toContain('Get credentials');
    expect(button.getAttribute('href')).toBe('/en/home');
    expect(button.getAttribute('color')).toBe('accent');
  });
  it('omits actions that were not provided', async () => {
    const page = await newSpecPage({ components: [DEmptyState], html: '<d-empty-state heading="No activity"></d-empty-state>' });
    expect(page.root.shadowRoot.querySelector('d-button')).toBeNull();
  });
});
