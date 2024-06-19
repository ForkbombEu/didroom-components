import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-page-description',
  styleUrl: 'd-page-description.css',
  shadow: true,
})
export class DPageDescription {
  @Prop({ reflect: true }) title: string;
  @Prop({ reflect: true }) description?: string;

  render() {
    return (
      <Host>
        <d-heading size="s">{this.title}</d-heading>
        <d-text size="l">
          <p>{this.description}</p>
        </d-text>
      </Host>
    );
  }

}
