import { newE2EPage } from '@stencil/core/testing';

describe('d-background-illustration', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-background-illustration></d-background-illustration>');

    const element = await page.find('d-background-illustration');
    expect(element).toHaveClass('hydrated');
  });
});
