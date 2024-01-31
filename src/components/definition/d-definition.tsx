import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-definition',
  styleUrl: 'd-definition.css',
  shadow: true,
})
export class DDefinition {
  @Prop({ reflect: true }) title: string;
  @Prop({ reflect: true }) definition: string;

  render() {
    

    return (
      <Host>
        <div>
          <dt class="title">{this.title}</dt>
          <dd class="definition">{this.definition}</dd>
        </div>
        <slot></slot>
      </Host>
    );
  }
}
