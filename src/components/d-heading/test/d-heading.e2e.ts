import { newE2EPage } from '@stencil/core/testing';

describe('d-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-heading></d-heading>');

    const element = await page.find('d-heading');
    expect(element).toHaveClass('hydrated');
  });
});
