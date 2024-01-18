import { newE2EPage } from '@stencil/core/testing';

describe('didroom-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<didroom-avatar></didroom-avatar>');

    const element = await page.find('didroom-avatar');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<didroom-avatar name="mickey mouse"></didroom-avatar>');
    const component = await page.find('didroom-avatar');
    const element = await page.find('didroom-avatar >>> span');
    expect(element.textContent).toEqual(`mm`);

    component.setProperty('name', 'duffy duck');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`dd`);
  });
});
