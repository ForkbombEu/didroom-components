import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'd-definition',
  styleUrl: 'd-definition.css',
  shadow: true,
})
export class DDefinition {
  @Prop({ reflect: true }) title: string;
  @Prop({ reflect: true }) definition: string;
  @Prop({ reflect: true }) hidable: boolean;
  @State() hide: boolean = false;

  render() {
    const onClick = () => (this.hide = !this.hide);

    return (
      <Host>
        <div>
          <dl>
            <dt class="title">{this.title}</dt>
            <dd class="definition">{!this.hide ? this.definition : '**********'}</dd>
          </dl>
          {this.hidable && (
            <button onClick={onClick}>
              {this.hide ? <d-icon icon="visibility" outline class="text-[#C0C0CA]" /> : <d-icon icon="visibility-off" outline class="text-[#C0C0CA]" />}
            </button>
          )}
        </div>
      </Host>
    );
  }
}
