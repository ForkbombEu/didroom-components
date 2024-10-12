import { newE2EPage } from '@stencil/core/testing';

describe('d-qr-code', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-qr-code></d-qr-code>');

    const element = await page.find('d-qr-code');
    expect(element).toHaveClass('hydrated');
  });
});
