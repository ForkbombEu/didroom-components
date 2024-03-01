import { newE2EPage } from '@stencil/core/testing';

describe('d-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-input></d-input>');

    const element = await page.find('d-input');
    expect(element).toHaveClass('hydrated');
  });
});
