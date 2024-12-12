import { newE2EPage } from '@stencil/core/testing';

describe('d-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-list-item></d-list-item>');

    const element = await page.find('d-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
