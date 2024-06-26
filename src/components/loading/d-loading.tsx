import { Component, Host, h } from '@stencil/core';
// import fingerPrintLottie from '../assets/fingerPrintLottie.json';
// import fingerPrintLottieLight from '../assets/fingerPrintLottieLight.json';
import '@dotlottie/player-component';
// import '@lottiefiles/lottie-player';
import { getAssetPath } from '@stencil/core';

// const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// const getLottieAnimation = isDark ? fingerPrintLottie : fingerPrintLottieLight;

@Component({
  tag: 'd-loading',
  styleUrl: 'd-loading.css',
  shadow: true,
})
export class DLoading {
  container!: HTMLElement;
  constructor() {
    this.play = this.play.bind(this);
    
  }
  play() {
    console.log('play');
    //@ts-ignore
    this.container.play();
  }
  componentDidRender() {
    console.log(this.container);
    //@ts-ignore
    this.container.play()
    //@ts-ignore
    this.container.autoplay = true;
    // this.play();
  }

  render() {
    const lottie = getAssetPath('assets/lxvwpkyx.lottie');
    return (
      <Host>
        <dotlottie-player
          src="https://assets2.lottiefiles.com/dotlotties/dlf10_l12sw9oo.lottie"
          play={true}
          autoplay={1}
          controls
          loop={1}
          style={{ height: '100%', width: '100%' }}
        />
        <dotlottie-player
          src={lottie}
          autoplay
          loop={1}
          // controls
          style={{ height: '100%', width: '100%' }}
          ref={(ref: HTMLElement) => {
            this.container = ref;
          }}
        />
        {/* <lottie-player autoplay controls loop mode="normal" src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json" style="width: 320px"></lottie-player> */}
      </Host>
    );
  }
}
