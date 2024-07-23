import { newE2EPage } from '@stencil/core/testing';

describe('d-app-details', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-app-details></d-app-details>');

    const element = await page.find('d-app-details');
    expect(element).toHaveClass('hydrated');
  });
});
