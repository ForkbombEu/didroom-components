import { newE2EPage } from '@stencil/core/testing';

describe('d-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-avatar></d-avatar>');

    const element = await page.find('d-avatar');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<d-avatar name="mickey mouse"></d-avatar>');
    const component = await page.find('d-avatar');
    const element = await page.find('d-avatar >>> span');
    expect(element.textContent).toEqual(`mm`);

    component.setProperty('name', 'duffy duck');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`dd`);
  });
});
