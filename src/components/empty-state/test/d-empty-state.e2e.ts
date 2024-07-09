import { newE2EPage } from '@stencil/core/testing';

describe('d-empty-state', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-empty-state></d-empty-state>');

    const element = await page.find('d-empty-state');
    expect(element).toHaveClass('hydrated');
  });
});
