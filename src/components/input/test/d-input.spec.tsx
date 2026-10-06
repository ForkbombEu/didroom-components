import { newSpecPage } from '@stencil/core/testing';
import { DInput } from '../d-input';
import { DButton } from '../../button/d-button';

describe('input', () => {
  it('renders a persistent label and no automatic correction for secrets', async () => {
    const page = await newSpecPage({ components: [DInput], html: '<d-input name="seed" label="Passphrase" type="password" hidable></d-input>' });
    const label = page.root.shadowRoot.querySelector('label');
    const input = page.root.shadowRoot.querySelector('ion-input');
    expect(label.textContent).toBe('Passphrase');
    expect(label.getAttribute('htmlfor')).toMatch(/^d-input-/);
    expect(input.getAttribute('aria-label')).toBe('Passphrase');
    expect(input.getAttribute('autocomplete')).toBe('off');
    expect(input.getAttribute('autocapitalize')).toBe('none');
  });
  it('toggles visibility without mutating the declared input type', async () => {
    const page = await newSpecPage({ components: [DInput, DButton], html: '<d-input type="password" hidable show-password-label="Show" hide-password-label="Hide"></d-input>' });
    const toggle = page.root.shadowRoot.querySelector('d-button');
    expect((toggle as any).accessibleLabel).toBe('Show');
    toggle.click();
    await page.waitForChanges();
    expect(page.root.type).toBe('password');
    expect(page.root.shadowRoot.querySelector('ion-input').getAttribute('type')).toBe('text');
    expect((toggle as any).accessibleLabel).toBe('Hide');
    expect((toggle as any).pressed).toBe(true);
  });
  it('emits a controlled clear rather than mutating its value prop', async () => {
    const page = await newSpecPage({ components: [DInput], html: '<d-input clear-button value="original"></d-input>' });
    const input = jest.fn();
    page.root.addEventListener('dInput', input);
    page.root.shadowRoot.querySelector('d-button').click();
    expect(input.mock.calls[0][0].detail).toBe('');
    expect(page.root.value).toBe('original');
  });
});
