import { newE2EPage } from '@stencil/core/testing';

describe('d-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-header></d-header>');

    const element = await page.find('d-header');
    expect(element).toHaveClass('hydrated');
  });
});
