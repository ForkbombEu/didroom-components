import { newE2EPage } from '@stencil/core/testing';

describe('d-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-checkbox></d-checkbox>');

    const element = await page.find('d-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
