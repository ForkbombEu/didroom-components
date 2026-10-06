import { newSpecPage } from '@stencil/core/testing';
import { DBackgroundIllustration } from '../d-background-illustration';

describe('background-illustration', () => {
  it('offers a compact task-screen illustration without replacing the artwork', async () => {
    const page = await newSpecPage({ components: [DBackgroundIllustration], html: '<d-background-illustration compact background="/bg.svg"></d-background-illustration>' });
    expect(page.root.classList.contains('illustration-compact')).toBe(true);
    expect(page.root.style.backgroundImage).toContain('/bg.svg');
  });
});
