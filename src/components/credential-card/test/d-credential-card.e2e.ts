import { newE2EPage } from '@stencil/core/testing';

describe('d-credential-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-credential-card></d-credential-card>');

    const element = await page.find('d-credential-card');
    expect(element).toHaveClass('hydrated');
  });
});
