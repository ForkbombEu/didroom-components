import { Component, Host, Prop, Event, h, EventEmitter, Element } from '@stencil/core';

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
  @Event() dInput!: EventEmitter<string>;
  @Event() dChange!: EventEmitter<string>;

  @Element() el: HTMLElement;

  private updateValue = (value: string) => {
    this.dInput.emit(value);
  };
  private clearValue = () => {
    this.value = undefined;
  };
  private changePasswordVisibility = () => {
    this.type = this.type === 'password' ? 'text' : 'password';
  };

  componentDidLoad() {
    const ionInputEl = this.el.shadowRoot.querySelector('ion-input');
    if (ionInputEl && this.name) {
      const nativeInput = ionInputEl.querySelector('input.native-input');
      if (nativeInput) {
        nativeInput.id = this.name;
      }
    }
  }

  render() {
    return (
      <Host>
        <d-text class="label" size="m">
          {this.label}
        </d-text>
        <ion-input
          class={{
            'input': true,
            'ion-invalid': Boolean(this.errorText),
            'ion-touched': this.value && this.value.length > 0,
          }}
          type={this.type}
          name={this.name}
          fill="outline"
          placeholder={this.placeholder}
          autofocus={this.autoFocus}
          class:ion-invalid={this.errorText}
          class:ion-touched={this.errorText}
          value={this.value}
          onIonInput={e => {
            this.updateValue(e.detail.value);
          }}
          onIonChange={e => {
            this.updateValue(e.detail.value);
          }}
        >
          {this.personIcon && (
            <div slot="start">
              <d-icon icon="profile" size={20} outline />;
            </div>
          )}
          {this.clearButton && (
            <d-button slot="end" clear onClick={this.clearValue}>
              x
            </d-button>
          )}
          {this.hidable && (
            <d-button
              class="h-full"
              slot="end"
              clear
              onClick={this.changePasswordVisibility}
              aria-checked={this.type !== 'password' ? 'true' : 'false'}
              aria-label="show password"
              role="switch"
            >
              {this.type === 'password' ? <d-icon icon="visibility" outline class="text-on" /> : <d-icon icon="visibility-off" outline class="text-on" />}
            </d-button>
          )}
        </ion-input>
        {this.errorText && (
          <d-text class="error-text" size="s">
            {this.errorText}
          </d-text>
        )}
        <slot />
        {this.helperText && (
          <d-text class="helper-text" size="s">
            {this.helperText}
          </d-text>
        )}
      </Host>
    );
  }
}
