import { newE2EPage } from '@stencil/core/testing';

describe('d-illustration', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-illustration></d-illustration>');

    const element = await page.find('d-illustration');
    expect(element).toHaveClass('hydrated');
  });
});
