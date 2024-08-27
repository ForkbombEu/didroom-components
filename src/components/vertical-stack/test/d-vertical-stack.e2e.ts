import { newE2EPage } from '@stencil/core/testing';

describe('d-vertical-stack', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-vertical-stack></d-vertical-stack>');

    const element = await page.find('d-vertical-stack');
    expect(element).toHaveClass('hydrated');
  });
});
