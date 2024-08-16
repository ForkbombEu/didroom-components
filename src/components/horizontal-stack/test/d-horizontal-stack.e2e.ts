import { newE2EPage } from '@stencil/core/testing';

describe('d-horizontal-stack', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-horizontal-stack></d-horizontal-stack>');

    const element = await page.find('d-horizontal-stack');
    expect(element).toHaveClass('hydrated');
  });
});
