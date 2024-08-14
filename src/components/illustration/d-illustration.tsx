import { Build, Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import { fetchAsset } from '../utils';
import { INode, stringify } from 'svgson';

@Component({
  assetsDirs: ['assets'],
  tag: 'd-illustration',
  styleUrl: 'd-illustration.css',
  shadow: true,
})
export class DIllustration {
  @Element() el: HTMLElement;
  @Prop() illustration: string = null;
  @Prop() width: number = 24;
  @Prop() height: number = 24;
  @State() private pathData: INode;
  @State() private svg: HTMLElement;
  @State() private visible = false;
  private intersectionObserver: IntersectionObserver;

  connectedCallback(): void {
    this.waitUntilVisible(async () => {
      this.visible = true;
      await this.loadIllustrationPathData();
    });
  }

  disconnectedCallback(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = null;
    }
  }

  async componentWillLoad(): Promise<void> {
    this.loadIllustrationPathData();
  }

  render() {
    return (
      <Host>
        {this.svg}
      </Host>
    );
  }

  @Watch('illustration') private async loadIllustrationPathData(): Promise<void> {
    const { illustration, visible } = this;
    if (!Build.isBrowser || !illustration || !visible) {
      return;
    }

    this.pathData = await fetchAsset({ asset: illustration });
    this.pathData = this.pathData;
    this.svg = <div innerHTML={stringify(this.pathData)} />
  }

  private waitUntilVisible(callback: () => void): void {
    if (!Build.isBrowser || typeof window === 'undefined' || !(window as any).IntersectionObserver) {
      callback();
      return;
    }

    this.intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.intersectionObserver.disconnect();
            this.intersectionObserver = null;
            callback();
          }
        });
      },
      { rootMargin: '50px' },
    );

    this.intersectionObserver.observe(this.el);
  }
}
