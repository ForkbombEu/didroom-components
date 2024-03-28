import { newE2EPage } from '@stencil/core/testing';

describe('d-feedback', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-feedback></d-feedback>');

    const element = await page.find('d-feedback');
    expect(element).toHaveClass('hydrated');
  });
});
