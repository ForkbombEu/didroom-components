import { newE2EPage } from '@stencil/core/testing';

describe('d-tab-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-tab-page></d-tab-page>');

    const element = await page.find('d-tab-page');
    expect(element).toHaveClass('hydrated');
  });
});
