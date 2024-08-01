import { newE2EPage } from '@stencil/core/testing';

describe('d-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-list></d-list>');

    const element = await page.find('d-list');
    expect(element).toHaveClass('hydrated');
  });
});
