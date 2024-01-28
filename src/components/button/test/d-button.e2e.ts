import { newE2EPage } from '@stencil/core/testing';

describe('d-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-button></d-button>');

    const element = await page.find('d-button');
    expect(element).toHaveClass('hydrated');
  });
});
