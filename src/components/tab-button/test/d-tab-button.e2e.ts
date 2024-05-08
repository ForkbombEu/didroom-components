import { newE2EPage } from '@stencil/core/testing';

describe('d-tab-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-tab-button></d-tab-button>');

    const element = await page.find('d-tab-button');
    expect(element).toHaveClass('hydrated');
  });
});
