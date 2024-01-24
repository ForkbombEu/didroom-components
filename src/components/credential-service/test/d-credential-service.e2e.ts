import { newE2EPage } from '@stencil/core/testing';

describe('d-credential-service', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-credential-service></d-credential-service>');

    const element = await page.find('d-credential-service');
    expect(element).toHaveClass('hydrated');
  });
});
