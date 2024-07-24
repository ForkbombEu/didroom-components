import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-credential-detail',
  styleUrl: 'd-credential-detail.css',
  shadow: true,
})
export class DCredentialDetail {
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) description: string;
  @Prop({ reflect: true }) issuer: string;
  @Prop({ reflect: true }) longDescription?: string;


  render() {
    const longDescription = this.longDescription ? this.longDescription : '';
    return (
      <Host class="w-full inline-flex flex-col items-start gap-2.5 px-0 py-5 rounded-lg bg-primary">
        <div class="w-full flex flex-col items-start px-5 py-0 bg-primary">
          <div class="flex text-on text-xl not-italic font-semibold items-center gap-2">
            <span class="text-on text-2xl not-italic font-semibold leading-[20.5px] tracking-[-0.5px]">{this.name}</span>
          </div>
          <div class="info">
            <span class="text-on text-base not-italic font-medium leading-[20.5px] tracking-[-0.5px]">{this.description}</span>
            <div class="flex flex-col items-start gap-4">
              <span class="text-on-alt text-xs not-italic font-normal leading-[150%] tracking-[-0.5px]">{longDescription}</span>
              <span class="self-stretch overflow-hidden text-on text-ellipsis text-xs not-italic font-normal leading-4">{this.issuer}</span>
            </div>
          </div>
          <div class="w-full">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
