import { newE2EPage } from '@stencil/core/testing';

describe('d-definition', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-definition></d-definition>');

    const element = await page.find('d-definition');
    expect(element).toHaveClass('hydrated');
  });
});
