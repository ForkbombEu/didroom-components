import { newE2EPage } from '@stencil/core/testing';

describe('d-copy-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-copy-button></d-copy-button>');

    const element = await page.find('d-copy-button');
    expect(element).toHaveClass('hydrated');
  });
});
