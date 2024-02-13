import { newE2EPage } from '@stencil/core/testing';

describe('didroom-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<didroom-logo></didroom-logo>');

    const element = await page.find('didroom-logo');
    expect(element).toHaveClass('hydrated');
  });
});
