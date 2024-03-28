import { newE2EPage } from '@stencil/core/testing';

describe('d-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-toast></d-toast>');

    const element = await page.find('d-toast');
    expect(element).toHaveClass('hydrated');
  });
});
