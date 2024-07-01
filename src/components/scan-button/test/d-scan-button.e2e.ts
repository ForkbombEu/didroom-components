import { newE2EPage } from '@stencil/core/testing';

describe('d-scan-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-scan-button></d-scan-button>');

    const element = await page.find('d-scan-button');
    expect(element).toHaveClass('hydrated');
  });
});
