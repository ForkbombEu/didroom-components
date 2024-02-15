import { Component, Element, Event, Host, Prop, Watch, h } from '@stencil/core';
import { Color } from '../types';
import type { EventEmitter, ComponentInterface } from '@stencil/core';

const hasShadowDom = (el: HTMLElement) => {
  return !!el.shadowRoot && !!(el as any).attachShadow;
};

@Component({
  tag: 'd-button',
  styleUrl: 'd-button.scss',
  shadow: true,
})
export class DButton implements ComponentInterface {
  private formButtonEl: HTMLButtonElement | null = null;
  private formEl: HTMLFormElement | null = null;

  @Element() el!: HTMLElement;
  @Prop({ reflect: true }) color?: Color = 'primary';
  @Prop({ mutable: true }) buttonType = 'button';
  @Prop({ reflect: true }) disabled = false;
  @Watch('disabled')
  disabledChanged() {
    const { disabled } = this;
    if (this.formButtonEl) {
      this.formButtonEl.disabled = disabled;
    }
  }
  @Prop({ reflect: true }) expand?: boolean;
  @Prop() href: string | undefined;
  @Prop({ reflect: true }) size?: 'small' | 'default' | 'large';
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';
  @Prop() form?: string | HTMLFormElement;
  @Event() dFocus!: EventEmitter<void>;
  @Event() dBlur!: EventEmitter<void>;


  private get hasIconOnly() {
    return !!this.el.querySelector('[slot="icon-only"]');
  }

  private submitForm(ev: Event) {
    if (this.formEl && this.formButtonEl) {
      ev.preventDefault();
      this.formButtonEl.click();
    }
  }

  private handleClick = (ev: Event) => {
    const { el } = this;
     if (hasShadowDom(el)) {
      this.submitForm(ev);
    }
  };

  private onFocus = () => {
    this.dFocus.emit();
  };

  private onBlur = () => {
    this.dBlur.emit();
  };

  render() {
    const { buttonType, type, disabled, size, href, color, expand, hasIconOnly } = this;
    const finalSize = size === undefined ? 'small' : size;
    const TagType = href === undefined ? 'button' : ('a' as any);
    const attrs = TagType === 'button' ? { type } : { href };

    return (
      <Host
        onClick={this.handleClick}
        aria-disabled={disabled ? 'true' : null}
        class={{
          [color]: true,
          [buttonType]: true,
          ['button-block']: expand,
          [`${buttonType}-${finalSize}`]: finalSize !== undefined,
          'button-has-icon-only': hasIconOnly,
          'button-disabled': disabled,
        }}
      >
        <TagType {...attrs} class={`button-native ${color}`} part="native" disabled={disabled} onFocus={this.onFocus} onBlur={this.onBlur}>
          <span class="button-inner">
            <slot name="icon-only"></slot>
            <slot name="start"></slot>
            <slot></slot>
            <slot name="end"></slot>
          </span>
        </TagType>
      </Host>
    );
  }
}
