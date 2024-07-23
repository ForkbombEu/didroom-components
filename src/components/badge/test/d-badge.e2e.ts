import { newE2EPage } from '@stencil/core/testing';

describe('d-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-badge></d-badge>');

    const element = await page.find('d-badge');
    expect(element).toHaveClass('hydrated');
  });
});
