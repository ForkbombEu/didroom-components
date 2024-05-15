import { newE2EPage } from '@stencil/core/testing';

describe('d-buttons-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-buttons-group></d-buttons-group>');

    const element = await page.find('d-buttons-group');
    expect(element).toHaveClass('hydrated');
  });
});
