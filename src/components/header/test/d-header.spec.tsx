import { newSpecPage } from '@stencil/core/testing';
import { DHeader } from '../d-header';

describe('header', () => {
  it('names icon-only navigation in the supplied language', async () => {
    const page = await newSpecPage({ components: [DHeader], html: '<d-header back-button settings back-button-label="Indietro" settings-title="Impostazioni">Wallet</d-header>' });
    const buttons = page.root.shadowRoot.querySelectorAll('ion-button');
    expect(buttons[0].getAttribute('aria-label')).toBe('Indietro');
    expect(buttons[1].getAttribute('aria-label')).toBe('Impostazioni');
    const handler = jest.fn();
    page.root.addEventListener('backButtonClick', handler);
    buttons[0].click();
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
