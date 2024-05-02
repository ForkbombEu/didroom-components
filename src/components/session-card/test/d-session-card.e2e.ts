import { newE2EPage } from '@stencil/core/testing';

describe('d-session-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-session-card></d-session-card>');

    const element = await page.find('d-session-card');
    expect(element).toHaveClass('hydrated');
  });
});
