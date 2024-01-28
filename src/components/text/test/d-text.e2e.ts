import { newE2EPage } from '@stencil/core/testing';

describe('d-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-text></d-text>');

    const element = await page.find('d-text');
    expect(element).toHaveClass('hydrated');
  });
});
