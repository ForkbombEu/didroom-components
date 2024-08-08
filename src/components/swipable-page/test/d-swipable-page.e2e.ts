import { newE2EPage } from '@stencil/core/testing';

describe('d-swipable-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-swipable-page></d-swipable-page>');

    const element = await page.find('d-swipable-page');
    expect(element).toHaveClass('hydrated');
  });
});
