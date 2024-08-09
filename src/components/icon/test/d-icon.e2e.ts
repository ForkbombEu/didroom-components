import { newE2EPage } from '@stencil/core/testing';

describe('d-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-icon></d-icon>');

    const element = await page.find('d-icon');
    expect(element).toHaveClass('hydrated');
  });
});
