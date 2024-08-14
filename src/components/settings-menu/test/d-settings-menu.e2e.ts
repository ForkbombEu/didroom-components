import { newE2EPage } from '@stencil/core/testing';

describe('d-settings-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-settings-menu></d-settings-menu>');

    const element = await page.find('d-settings-menu');
    expect(element).toHaveClass('hydrated');
  });
});
