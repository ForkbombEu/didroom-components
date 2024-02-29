import { Component, Host, Prop, Event, h, EventEmitter } from '@stencil/core';

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
  @Event() dInput!: EventEmitter<string>;
  @Event() dChange!: EventEmitter<string>;

  private updateValue = (value: string) => {
    this.dInput.emit(value);
  };
  private clearValue = () => {
    this.value = undefined;
  };

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
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="user">
                  <path
                    id="Vector"
                    d="M11.7678 7.76777C11.2989 8.23661 10.663 8.5 10 8.5C9.33696 8.5 8.70107 8.23661 8.23223 7.76777C7.76339 7.29893 7.5 6.66304 7.5 6C7.5 5.33696 7.76339 4.70107 8.23223 4.23223C8.70107 3.76339 9.33696 3.5 10 3.5C10.663 3.5 11.2989 3.76339 11.7678 4.23223C12.2366 4.70107 12.5 5.33696 12.5 6C12.5 6.66304 12.2366 7.29893 11.7678 7.76777ZM3.51926 17.5C3.5719 16.8176 3.73208 16.1468 3.99478 15.5126C4.32144 14.7239 4.80022 14.0074 5.40381 13.4038C6.00739 12.8002 6.72394 12.3214 7.51256 11.9948C8.30117 11.6681 9.14641 11.5 10 11.5C10.8536 11.5 11.6988 11.6681 12.4874 11.9948C13.2761 12.3214 13.9926 12.8002 14.5962 13.4038C15.1998 14.0074 15.6786 14.7239 16.0052 15.5126C16.2679 16.1468 16.4281 16.8176 16.4807 17.5H3.51926Z"
                    fill="#6B7280"
                    stroke="#6B7280"
                  />
                </g>
              </svg>
            </div>
          )}
          {this.clearButton && (
            <d-button slot="end" clear onClick={this.clearValue}>
              x
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
