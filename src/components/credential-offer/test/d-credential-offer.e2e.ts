import { newE2EPage } from '@stencil/core/testing';

describe('d-credential-offer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-credential-offer></d-credential-offer>');

    const element = await page.find('d-credential-offer');
    expect(element).toHaveClass('hydrated');
  });
});
