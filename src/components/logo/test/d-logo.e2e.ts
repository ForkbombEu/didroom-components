import { newE2EPage } from '@stencil/core/testing';

describe('d-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-logo></d-logo>');

    const element = await page.find('d-logo');
    expect(element).toHaveClass('hydrated');
  });
});
