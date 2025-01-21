import { Component, h, Prop, State } from '@stencil/core';
import { Clipboard } from '@capacitor/clipboard';
// import { clipboardOutline, checkmarkOutline } from 'ionicons/icons';

@Component({
  tag: 'd-copy-button',
  styleUrl: 'd-copy-button.css',
  shadow: true,
})
export class DCopyButton {
  @Prop() textToCopy: string;
  @Prop() delay: number = 2000;
  @State() isCopied: boolean = false;

  async copyText() {
    await Clipboard.write({
      string: this.textToCopy,
    });

    this.isCopied = true;

    setTimeout(() => {
      this.isCopied = false;
    }, this.delay);
  }

  render() {
    return (
      <d-button role="button" onClick={() => this.copyText()} color="outline" class="text-on" expand>
        {!this.isCopied ? 'Copy' : 'Copied!'}
      </d-button>
    );
  }
}
