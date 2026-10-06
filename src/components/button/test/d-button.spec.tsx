import { newSpecPage } from '@stencil/core/testing';
import { DButton } from '../d-button';

describe('button', () => {
  it('renders a native button with an accessible toggle name', async () => {
    const page = await newSpecPage({ components: [DButton], html: '<d-button accessible-label="Show password" pressed="false">Show</d-button>' });
    const button = page.root.shadowRoot.querySelector('button');
    expect(button.type).toBe('button');
    expect(button.getAttribute('aria-label')).toBe('Show password');
    expect(button.getAttribute('aria-pressed')).toBe('false');
  });
  it('prevents disabled links from navigating or activating host handlers', async () => {
    const page = await newSpecPage({ components: [DButton], html: '<d-button href="/wallet" disabled>Open wallet</d-button>' });
    const link = page.root.shadowRoot.querySelector('a');
    expect(link.getAttribute('tabindex')).toBe('-1');
    expect(link.getAttribute('aria-disabled')).toBe('true');
    const event = new MouseEvent('click', { bubbles: true, cancelable: true });
    page.root.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
  });
});
