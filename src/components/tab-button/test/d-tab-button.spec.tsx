import { newSpecPage } from '@stencil/core/testing';
import { DTabButton } from '../d-tab-button';

describe('tab-button', () => {
  it('exposes the active route, translated name and keyboard target', async () => {
    const page = await newSpecPage({ components: [DTabButton], html: '<d-tab-button tab="wallet" href="/it/wallet" active accessible-label="Wallet" focus-index="0">Wallet</d-tab-button>' });
    const link = page.root.shadowRoot.querySelector('a');
    expect(link.getAttribute('role')).toBe('tab');
    expect(link.getAttribute('aria-selected')).toBe('true');
    expect(link.getAttribute('aria-label')).toBe('Wallet');
    expect(link.getAttribute('href')).toBe('/it/wallet');
    expect(link.getAttribute('tabindex')).toBe('0');
  });
  it('activates with Space but not arbitrary keys', async () => {
    const page = await newSpecPage({ components: [DTabButton], html: '<d-tab-button tab="home">Home</d-tab-button>' });
    const link = page.root.shadowRoot.querySelector('a');
    const click = jest.fn();
    link.addEventListener('click', click);
    link.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    expect(click).not.toHaveBeenCalled();
    link.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true }));
    expect(click).toHaveBeenCalledTimes(1);
  });
});
