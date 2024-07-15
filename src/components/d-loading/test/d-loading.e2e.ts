import { newE2EPage } from '@stencil/core/testing';

describe('d-loading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-loading></d-loading>');

    const element = await page.find('d-loading');
    expect(element).toHaveClass('hydrated');
  });
});
