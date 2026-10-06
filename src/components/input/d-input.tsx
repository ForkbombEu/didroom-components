import { Component, Host, Prop, State, Event, h, EventEmitter, Element } from '@stencil/core';
import type { AutocompleteTypes } from '@ionic/core';

let inputIds = 0;

@Component({
  tag: 'd-input',
  styleUrl: 'd-input.css',
  shadow: true,
})
export class DInput {
  @Prop({ reflect: true }) type: 'text' | 'password' | 'email' | 'number' = 'text';
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) label: string;
  @Prop({ reflect: true }) placeholder: string;
  @Prop({ reflect: true }) helperText: string;
  @Prop({ reflect: true }) errorText: string;
  @Prop({ reflect: true }) value: string;
  @Prop({ reflect: true }) clearButton: boolean;
  @Prop({ reflect: true }) personIcon: boolean;
  @Prop({ reflect: true }) autoFocus: boolean;
  @Prop({ reflect: true }) hidable: boolean;
  @Prop() disabled = false;
  @Prop() autocomplete: AutocompleteTypes = 'off';
  @Prop() autocapitalize = 'none';
  @Prop() spellcheck = false;
  @Prop() showPasswordLabel = 'Show password';
  @Prop() hidePasswordLabel = 'Hide password';
  @Prop() clearLabel = 'Clear input';
  @State() private passwordVisible = false;
  @Event() dInput!: EventEmitter<string>;
  @Event() dChange!: EventEmitter<string>;
  @Element() el: HTMLElement;
  private readonly inputId = `d-input-${inputIds++}`;

  private updateValue = (value: string) => {
    this.dInput.emit(value ?? '');
  };

  private syncInputAccessibility = async () => {
    const ionInput = this.el.shadowRoot?.querySelector('ion-input');
    if (!ionInput?.getInputElement) return;
    const input = await ionInput.getInputElement();
    input.id = this.inputId;
    const wrapper = input.closest('label');
    if (wrapper) wrapper.htmlFor = this.inputId;
    const descriptions = [
      this.errorText && `${this.inputId}-error`,
      this.helperText && `${this.inputId}-hint`,
    ].filter(Boolean).join(' ');
    if (descriptions) input.setAttribute('aria-describedby', descriptions);
    else input.removeAttribute('aria-describedby');
    input.setAttribute('aria-invalid', String(Boolean(this.errorText)));
  };

  componentDidLoad() {
    void this.syncInputAccessibility();
  }

  componentDidRender() {
    void this.syncInputAccessibility();
  }

  render() {
    const inputType = this.type === 'password' && this.passwordVisible ? 'text' : this.type;
    return (
      <Host>
        {this.label && (
          <label class="label" htmlFor={this.inputId}>
            <d-text size="m">{this.label}</d-text>
          </label>
        )}
        <ion-input
          class={{ 'input': true, 'ion-invalid': Boolean(this.errorText), 'ion-touched': Boolean(this.errorText) }}
          aria-label={this.label || this.name}
          type={inputType}
          name={this.name}
          fill="outline"
          placeholder={this.placeholder}
          autofocus={this.autoFocus}
          disabled={this.disabled}
          autocomplete={this.autocomplete}
          autocapitalize={this.autocapitalize}
          spellcheck={this.spellcheck}
          value={this.value}
          onIonInput={event => this.updateValue(event.detail.value)}
          onIonChange={event => {
            this.updateValue(event.detail.value);
            this.dChange.emit(event.detail.value ?? '');
          }}
        >
          {this.personIcon && <d-icon slot="start" icon="profile" size={20} outline aria-hidden="true" />}
          {this.clearButton && (
            <d-button slot="end" clear disabled={this.disabled} accessibleLabel={this.clearLabel} onClick={() => this.updateValue('')}>
              <d-icon icon="close" outline aria-hidden="true" />
            </d-button>
          )}
          {this.hidable && this.type === 'password' && (
            <d-button
              slot="end"
              clear
              disabled={this.disabled}
              pressed={this.passwordVisible}
              accessibleLabel={this.passwordVisible ? this.hidePasswordLabel : this.showPasswordLabel}
              onClick={() => (this.passwordVisible = !this.passwordVisible)}
            >
              <d-icon icon={this.passwordVisible ? 'visibility-off' : 'visibility'} outline class="text-on" aria-hidden="true" />
            </d-button>
          )}
        </ion-input>
        <div id={`${this.inputId}-error`} role="alert" aria-atomic="true">
          {this.errorText && <d-text class="error-text" size="s">{this.errorText}</d-text>}
        </div>
        <slot />
        {this.helperText && (
          <div id={`${this.inputId}-hint`}>
            <d-text class="helper-text" size="s">{this.helperText}</d-text>
          </div>
        )}
      </Host>
    );
  }
}
