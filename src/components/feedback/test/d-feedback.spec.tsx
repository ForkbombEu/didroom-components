import { newSpecPage } from '@stencil/core/testing';
import { DFeedback } from '../d-feedback';

describe('feedback', () => {
  it('announces errors and labels dismiss and disclosure controls', async () => {
    const page = await newSpecPage({ components: [DFeedback], html: '<d-feedback type="error" feedback="Try again" message="Diagnostic" close-label="Dismiss" show-more-label="Details"></d-feedback>' });
    expect(page.root.shadowRoot.querySelector('[role="alert"]').textContent).toContain('Try again');
    const buttons = page.root.shadowRoot.querySelectorAll('button');
    expect(buttons[0].getAttribute('aria-label')).toBe('Dismiss');
    expect(buttons[1].getAttribute('aria-expanded')).toBe('false');
    buttons[1].click();
    await page.waitForChanges();
    expect(buttons[1].getAttribute('aria-expanded')).toBe('true');
  });
  it('escapes untrusted diagnostic markup', async () => {
    const page = await newSpecPage({ components: [DFeedback], html: '<d-feedback feedback="Error"></d-feedback>' });
    page.root.message = '<img src=x onerror="alert(1)">';
    await page.waitForChanges();
    page.root.shadowRoot.querySelectorAll('button')[1].click();
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('img')).toBeNull();
    expect(page.root.shadowRoot.textContent).toContain('<img');
  });
});
