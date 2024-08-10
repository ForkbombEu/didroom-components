import { Build, Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import { fetchIcon } from './utils';

@Component({
  assetsDirs: ['assets'],
  tag: 'd-icon',
  styleUrl: 'd-icon.css',
  shadow: true,
})
export class LibraryNameIcon {
  @Element() el: HTMLElement;
  @Prop() icon: string = null;
  @Prop() outline: boolean = false;
  @Prop() size: number = 24;
  @State() private pathData: { d: string; fill?: string; stroke?: string }[];
  @State() private pathList: HTMLElement[];
  @State() private visible = false;
  private intersectionObserver: IntersectionObserver;

  connectedCallback(): void {
    this.waitUntilVisible(async () => {
      this.visible = true;
      await this.loadIconPathData();
      this.generatePathList();
    });
  }

  disconnectedCallback(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = null;
    }
  }

  async componentWillLoad(): Promise<void> {
    this.loadIconPathData();
  }

  render() {
    const fill = this.outline ? 'none' : 'currentColor';
    const stroke = this.outline ? 'currentColor' : 'none';
    const { size } = this;
    return (
      <Host>
        <svg xmlns="http://www.w3.org/2000/svg" fill={fill} stroke={stroke} height={size} width={size} viewBox="0 0 24 24">
          <g clip-path="url(#clip0_24_4048)">{this.pathList}</g>
        </svg>
      </Host>
    );
  }

  @Watch('icon') private async loadIconPathData(): Promise<void> {
    const { icon, visible } = this;
    if (!Build.isBrowser || !icon || !visible) {
      return;
    }

    this.pathData = await fetchIcon({ icon: this.outline ? `${icon}-outline` : icon });
    this.pathData = this.pathData;
  }

  @Watch('pathData') private generatePathList(): void {
    this.pathList = this.pathData?.map(data => {
      const parsedData = data;
      return <path {...parsedData} />;
    });
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
