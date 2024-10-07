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
  @Prop({ reflect: true }) dotted: boolean;
  @State() hide: boolean = false;

  render() {
    const onClick = () => (this.hide = !this.hide);

    const dotted = () => (
      <Host class="w-full">
        <dl>
          <d-horizontal-stack class="items-center">
            <d-info-led type="warning" class="h-fit" />
            <dt>
              <d-text size="s" class="font-bold">
                {this.title}
              </d-text>
            </dt>
            <dd>
              <d-text size="s">{this.definition}</d-text>
            </dd>
          </d-horizontal-stack>
        </dl>
      </Host>
    );

    const notDotted = () => (
      <Host class="flex justify-between w-full border-b-on-alt border-b border-solid">
        <div class="flex justify-between w-full border-b-on-alt border-b border-solid">
          <dl class="flex flex-col w-full h-11">
            <dt class="text-on-alt text-xs not-italic font-normal leading-[150%] tracking-[-0.5px]">{this.title}</dt>
            <dd class="text-on not-italic text-xs font-medium leading-[150%] tracking-[-0.5px]">{!this.hide ? this.definition : '*'.repeat(this.definition.length)}</dd>
          </dl>
          {this.hidable && (
            <button onClick={onClick}>
              {this.hide ? <d-icon icon="visibility" outline class="text-[#C0C0CA]" /> : <d-icon icon="visibility-off" outline class="text-[#C0C0CA]" />}
            </button>
          )}
        </div>
      </Host>
    );

    return this.dotted ? dotted() : notDotted();
  }
}
