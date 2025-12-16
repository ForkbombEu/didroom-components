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
          <d-horizontal-stack class="items-start w-full">
            <d-info-led type="warning" class="h-fit" />
            <dt class="min-w-0">
              <d-text size="s" class="font-bold block truncate">
                {this.title}
              </d-text>
            </dt>
            <dd class="min-w-0 flex-1">
              <d-text size="s" class="block">{this.definition}</d-text>
            </dd>
          </d-horizontal-stack>
        </dl>
      </Host>
    );

    const notDotted = () => (
      <Host class="flex justify-between w-full border-b-on-alt border-b border-solid">
        <div class="flex justify-between w-full border-b-on-alt border-b border-solid">
          <dl class="flex flex-col w-full min-h-11">
            <dt class="text-on-alt text-xs not-italic font-normal leading-[150%] tracking-[-0.5px]">{this.title}</dt>
            <dd class="text-on not-italic text-xs font-medium leading-[150%] tracking-[-0.5px]">
              {this.hide
                ? '*'.repeat(String(this.definition).length)
                : (typeof this.definition === 'string' && this.definition.startsWith('data:image')
                    ? <img src={this.definition} alt={this.title} class="max-h-32 object-contain" />
                    : this.definition)}
            </dd>
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
