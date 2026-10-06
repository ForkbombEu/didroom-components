import { newSpecPage } from '@stencil/core/testing';
import { DTabPage } from '../d-tab-page';
import { DHeader } from '../../header/d-header';

describe('tab-page', () => {
  it('reserves scan space only on scanning screens', async () => {
    const page = await newSpecPage({ components: [DTabPage, DHeader], html: '<d-tab-page tab="profile" settings settings-title="Settings"></d-tab-page>' });
    expect(page.root.querySelector('d-scan-button')).toBeNull();
    expect(page.root.querySelector('.pb-24')).toBeNull();
    expect((page.root.querySelector('d-header') as any).settingsTitle).toBe('Settings');
  });
});
