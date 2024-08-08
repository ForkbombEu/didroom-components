import { newE2EPage } from '@stencil/core/testing';

describe('d-organizations', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-organizations></d-organizations>');

    const element = await page.find('d-organizations');
    expect(element).toHaveClass('hydrated');
  });
});
