import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'd-scanner-mask',
  styleUrl: 'd-scanner-mask.css',
  shadow: true,
})
export class DScannerMask {
  @Prop() heading: string;
  @Prop() description: string;
  @State() translateY: number = -138;
  animationDuration = 2000;

  componentDidLoad() {
    this.toggleAnimation();
  }

  toggleAnimation() {
    const easingFunction = this.quartInOut;
    let start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / this.animationDuration, 1); // cap at 1
      const easedProgress = easingFunction(progress);

      // Calculate the translateY value
      this.translateY = -138 + easedProgress * (135 - -138);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Reverse the animation once complete
        setTimeout(() => {
          this.translateY === -138 ? this.animateTo(135) : this.animateTo(-138);
        }, 0);
      }
    };

    requestAnimationFrame(animate);
  }

  animateTo(value: number) {
    this.translateY = value;
    this.toggleAnimation();
  }

  quartInOut(t: number) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }

  render() {
    const style = {
      transform: `translateY(${this.translateY}px)`,
    };
    return (
      <Host>
        <div class="visible fixed left-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-center">
          <div class="dark:bg-[#253151] bg-[#e9ebef] bg-opacity-70 min-h-24 w-full flex-grow" />
          <div class="flex h-72 w-full">
            <div class="max-w-1/4 dark:bg-[#253151] bg-[#e9ebef] bg-opacity-70 h-full flex-grow" />
            <div class="viewfinder relative z-50 h-72 w-72 overflow-hidden rounded-md bg-transparent">
              <div class="absolute left-0 top-0 h-full w-full border-8 border-accent"></div>
              <div class="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 transform bg-accent" style={style}></div>
            </div>
            <div class="dark:bg-[#253151] bg-[#e9ebef] bg-opacity-70 h-full flex-grow" />
          </div>
          <div class="dark:bg-[#253151] bg-[#e9ebef] bg-opacity-70 w-full flex-grow">
            <div class="text-center justify-center">
              <d-page-description title={this.heading} description={this.description} />
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
