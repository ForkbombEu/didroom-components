import { newE2EPage } from '@stencil/core/testing';

describe('d-scanner-mask', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-scanner-mask></d-scanner-mask>');

    const element = await page.find('d-scanner-mask');
    expect(element).toHaveClass('hydrated');
  });
});
