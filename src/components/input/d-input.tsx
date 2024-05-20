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
  @Prop({ reflect: true }) hidable: boolean;
  @Event() dInput!: EventEmitter<string>;
  @Event() dChange!: EventEmitter<string>;

  private updateValue = (value: string) => {
    this.dInput.emit(value);
  };
  private clearValue = () => {
    this.value = undefined;
  };
  private changePasswordVisibility = () => {
    this.type = this.type === 'password' ? 'text' : 'password';
  };

  render() {
    const showIcon = (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path
          fill-rule="evenodd"
          d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          clip-rule="evenodd"
        />
      </svg>
    );

    const hideIcon = (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="m4 15.6 3.055-3.056A4.913 4.913 0 0 1 7 12.012a5.006 5.006 0 0 1 5-5c.178.009.356.027.532.054l1.744-1.744A8.973 8.973 0 0 0 12 5.012c-5.388 0-10 5.336-10 7A6.49 6.49 0 0 0 4 15.6Z" />
        <path d="m14.7 10.726 4.995-5.007A.998.998 0 0 0 18.99 4a1 1 0 0 0-.71.305l-4.995 5.007a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.402.211.59l-4.995 4.983a1 1 0 1 0 1.414 1.414l4.995-4.983c.189.091.386.162.59.211.011 0 .021.007.033.01a2.982 2.982 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
        <path d="m19.821 8.605-2.857 2.857a4.952 4.952 0 0 1-5.514 5.514l-1.785 1.785c.767.166 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
      </svg>
    );

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
          {this.hidable && (
            <d-button slot="end" clear onClick={this.changePasswordVisibility}>
              {this.type === 'password' ? showIcon : hideIcon}
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
