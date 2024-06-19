import { newE2EPage } from '@stencil/core/testing';

describe('d-page-description', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-page-description></d-page-description>');

    const element = await page.find('d-page-description');
    expect(element).toHaveClass('hydrated');
  });
});
