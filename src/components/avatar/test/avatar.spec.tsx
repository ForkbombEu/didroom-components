import { newSpecPage } from '@stencil/core/testing';
import { Avatar } from '../avatar';

describe('d-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Avatar],
      html: `<d-avatar></d-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <d-avatar role="figure" shape="round" size="m">
        <mock:shadow-root>
          <svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M14.0015 16.2796C11.9477 16.2795 9.68689 16.8564 8 18C6.31311 19.1436 5.28077 20.7992 4.5638 22.6777C4.30879 23.3422 4.85297 24 5.5793 24H22.4192C23.1478 24 23.6897 23.3422 23.437 22.6777C22.72 20.7992 21.6869 19.1436 20 18C18.3131 16.8564 16.0554 16.2795 14.0015 16.2796ZM19.0289 8.9125C19.0289 10.2154 18.4987 11.4649 17.5548 12.3862C16.6109 13.3074 15.3307 13.825 13.9959 13.825C12.661 13.825 11.3808 13.3074 10.4369 12.3862C9.49304 11.4649 8.96277 10.2154 8.96277 8.9125C8.96277 7.60962 9.49304 6.36011 10.4369 5.43884C11.3808 4.51756 12.661 4 13.9959 4C15.3307 4 16.6109 4.51756 17.5548 5.43884C18.4987 6.36011 19.0289 7.60962 19.0289 8.9125Z" fill="#F8FAFE" fill-rule="evenodd"></path>
          </svg>
        </mock:shadow-root>
      </d-avatar>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Avatar],
      html: `<d-avatar name="Maccio Capatonda"></d-avatar>`,
    });
    expect(root).toEqualHtml(`
    <d-avatar aria-label="Maccio Capatonda" name="Maccio Capatonda" role="figure" shape="round" size="m">
      <mock:shadow-root>
        <span class="font-medium uppercase">
          MC
        </span>
      </mock:shadow-root>
    </d-avatar>
    `);
  });

  it('renders with shape and icon', async () => {
    const { root } = await newSpecPage({
      components: [Avatar],
      html: `<d-avatar shape="square" name=""></d-avatar>`,
    });
    expect(root).toEqualHtml(`
    <d-avatar aria-label="" role="figure" shape="square" size="m">
      <mock:shadow-root>
        <svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" d="M14.0015 16.2796C11.9477 16.2795 9.68689 16.8564 8 18C6.31311 19.1436 5.28077 20.7992 4.5638 22.6777C4.30879 23.3422 4.85297 24 5.5793 24H22.4192C23.1478 24 23.6897 23.3422 23.437 22.6777C22.72 20.7992 21.6869 19.1436 20 18C18.3131 16.8564 16.0554 16.2795 14.0015 16.2796ZM19.0289 8.9125C19.0289 10.2154 18.4987 11.4649 17.5548 12.3862C16.6109 13.3074 15.3307 13.825 13.9959 13.825C12.661 13.825 11.3808 13.3074 10.4369 12.3862C9.49304 11.4649 8.96277 10.2154 8.96277 8.9125C8.96277 7.60962 9.49304 6.36011 10.4369 5.43884C11.3808 4.51756 12.661 4 13.9959 4C15.3307 4 16.6109 4.51756 17.5548 5.43884C18.4987 6.36011 19.0289 7.60962 19.0289 8.9125Z" fill="#F8FAFE" fill-rule="evenodd"></path>
        </svg>
    </mock:shadow-root>
    </d-avatar>
    `);
  });
});
