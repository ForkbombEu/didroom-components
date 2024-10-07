import { newE2EPage } from '@stencil/core/testing';

describe('d-verification-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-verification-card></d-verification-card>');

    const element = await page.find('d-verification-card');
    expect(element).toHaveClass('hydrated');
  });
});
