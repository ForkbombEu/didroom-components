import { newE2EPage } from '@stencil/core/testing';

describe('d-credential-detail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-credential-detail></d-credential-detail>');

    const element = await page.find('d-credential-detail');
    expect(element).toHaveClass('hydrated');
  });
});
