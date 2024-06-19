import { newE2EPage } from '@stencil/core/testing';

describe('d-activity-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-activity-card></d-activity-card>');

    const element = await page.find('d-activity-card');
    expect(element).toHaveClass('hydrated');
  });
});
