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
  @Prop({ reflect: true }) color?: Color | 'outline' = 'primary';
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
  @Prop({ reflect: true }) clear?: boolean;
  @Prop() href: string | undefined;
  @Prop({ reflect: true }) size?: 'small' | 'default' | 'large';
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';
  @Prop() form?: string | HTMLFormElement;
  @Event() dFocus!: EventEmitter<void>;
  @Event() dBlur!: EventEmitter<void>;

  private get hasIconOnly() {
    return !!this.el.querySelector("[slot='icon-only']");
  }

  private findForm(): HTMLFormElement | null {
    const { form } = this;
    if (form instanceof HTMLFormElement) {
      return form;
    }
    if (typeof form === 'string') {
      const el: HTMLElement | null = document.getElementById(form);
      if (el) {
        if (el instanceof HTMLFormElement) {
          return el;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
    if (form !== undefined) {
      return null;
    }
    return this.el.closest('form');
  }

  private renderHiddenButton() {
    const formEl = (this.formEl = this.findForm());
    if (formEl) {
      const { formButtonEl } = this;
      if (formButtonEl !== null && formEl.contains(formButtonEl)) {
        return;
      }
      const newFormButtonEl = (this.formButtonEl = document.createElement('button'));
      newFormButtonEl.type = this.type;
      newFormButtonEl.style.display = 'none';
      newFormButtonEl.disabled = this.disabled;
      formEl.appendChild(newFormButtonEl);
    }
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
    const finalSize = size === undefined ? 'default' : size;
    const TagType = href === undefined ? 'button' : ('a' as any);
    const attrs = TagType === 'button' ? { type } : { href };

    {
      type !== 'button' && this.renderHiddenButton();
    }

    const inButtonsGroup = this.el.closest('d-buttons-group') !== null;
    return (
      <Host
        onClick={this.handleClick}
        aria-disabled={disabled ? 'true' : null}
        class={{
          [color]: true,
          'accent': inButtonsGroup || color === 'accent',
          [buttonType]: true,
          'button-block': expand || inButtonsGroup,
          [`${buttonType}-${finalSize}`]: finalSize !== undefined,
          'button-has-icon-only': hasIconOnly,
          'button-disabled': disabled,
          'button-clear': this.clear || inButtonsGroup,
        }}
      >
        <TagType
          {...attrs}
          class={{ 'h-full': true, 'button-native': true, [color]: true, 'accent': inButtonsGroup || color === 'accent', 'uppercase': !inButtonsGroup }}
          part="native"
          disabled={disabled}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        >
          <span class={{ 'button-inner': true, 'justify-start': inButtonsGroup, 'justify-center': !inButtonsGroup }}>
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
