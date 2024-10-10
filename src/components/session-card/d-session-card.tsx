import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'd-session-card',
  styleUrl: 'd-session-card.css',
  shadow: true,
})
export class DSessionCard {
  @Prop() sid: string;
  @Prop() date: string = '';
  @Prop() success: boolean = false;
  @Prop() inProgress: boolean = false;
  @Prop() sessionMessage: string = 'Session id:';
  @Prop() verifiedMessage: string = 'Verified.';
  @Prop() failureMessage: string = 'Failure.';
  @Prop() inProgressMessage: string = 'In progress...';

  render() {
    const isFailure = !(this.success || this.inProgress);

    const statusClasses = {
      'text-success border-success': this.success,
      'text-error border-error': isFailure,
      'text-warning border-warning': this.inProgress,
    };

    const icon = this.success ? 'done' : isFailure ? 'close' : 'more';

    const statusMessage = this.success ? this.verifiedMessage : isFailure ? this.failureMessage : this.inProgressMessage;

    return (
      <Host>
        <div class="flex flex-col items-center align-middle gap-8 w-52">
          <span class={{ 'w-24 h-24 rounded-full border-4': true, ...statusClasses }}>
            <d-icon icon={icon} outline size={88} />
          </span>
          <d-heading size="xs" class="text-on">
            {statusMessage}
          </d-heading>
          <div class="flex flex-col items-center gap-1 bg-primary p-4 rounded-lg">
            <d-text>{this.sessionMessage}</d-text>
            <d-heading size="xl" class={{ 'text-success': this.success, 'text-error': isFailure, 'text-warning': this.inProgress }}>
              {this.sid}
            </d-heading>
            <d-text>{this.date}</d-text>
          </div>
        </div>
      </Host>
    );
  }
}
