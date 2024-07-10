import { newE2EPage } from '@stencil/core/testing';

describe('d-did-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-did-box></d-did-box>');

    const element = await page.find('d-did-box');
    expect(element).toHaveClass('hydrated');
  });
});
