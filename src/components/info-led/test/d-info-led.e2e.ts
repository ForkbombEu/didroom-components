import { newE2EPage } from '@stencil/core/testing';

describe('d-info-led', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-info-led></d-info-led>');

    const element = await page.find('d-info-led');
    expect(element).toHaveClass('hydrated');
  });
});
