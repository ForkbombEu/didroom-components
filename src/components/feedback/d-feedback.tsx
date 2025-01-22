import { Component, Host, Prop, h, State, EventEmitter, Event } from '@stencil/core';
import AnsiToHtml from 'ansi-to-html';

const converter = new AnsiToHtml();

const successIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g id="check-circle">
      <path
        id="Vector"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0004 21.6004C14.5465 21.6004 16.9883 20.589 18.7886 18.7886C20.589 16.9883 21.6004 14.5465 21.6004 12.0004C21.6004 9.45431 20.589 7.01252 18.7886 5.21217C16.9883 3.41182 14.5465 2.40039 12.0004 2.40039C9.45431 2.40039 7.01252 3.41182 5.21217 5.21217C3.41182 7.01252 2.40039 9.45431 2.40039 12.0004C2.40039 14.5465 3.41182 16.9883 5.21217 18.7886C7.01252 20.589 9.45431 21.6004 12.0004 21.6004ZM16.4488 10.4488C16.6674 10.2225 16.7883 9.91935 16.7856 9.60471C16.7829 9.29007 16.6567 8.9891 16.4342 8.76661C16.2117 8.54412 15.9107 8.41792 15.5961 8.41518C15.2814 8.41245 14.9783 8.5334 14.752 8.75199L10.8004 12.7036L9.24879 11.152C9.02247 10.9334 8.71935 10.8124 8.40471 10.8152C8.09007 10.8179 7.7891 10.9441 7.56661 11.1666C7.34412 11.3891 7.21792 11.6901 7.21518 12.0047C7.21245 12.3193 7.3334 12.6225 7.55199 12.8488L9.95199 15.2488C10.177 15.4738 10.4822 15.6001 10.8004 15.6001C11.1186 15.6001 11.4238 15.4738 11.6488 15.2488L16.4488 10.4488Z"
        fill="#4ECB71"
      />
    </g>
  </svg>
);

const closeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <g id="x">
      <path
        id="Vector"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.29279 4.29259C4.48031 4.10512 4.73462 3.99981 4.99979 3.99981C5.26495 3.99981 5.51926 4.10512 5.70679 4.29259L9.99979 8.58559L14.2928 4.29259C14.385 4.19708 14.4954 4.1209 14.6174 4.06849C14.7394 4.01608 14.8706 3.9885 15.0034 3.98734C15.1362 3.98619 15.2678 4.01149 15.3907 4.06177C15.5136 4.11205 15.6253 4.18631 15.7192 4.2802C15.8131 4.37409 15.8873 4.48574 15.9376 4.60864C15.9879 4.73154 16.0132 4.86321 16.012 4.99599C16.0109 5.12877 15.9833 5.25999 15.9309 5.382C15.8785 5.504 15.8023 5.61435 15.7068 5.70659L11.4138 9.99959L15.7068 14.2926C15.8889 14.4812 15.9897 14.7338 15.9875 14.996C15.9852 15.2582 15.88 15.509 15.6946 15.6944C15.5092 15.8798 15.2584 15.985 14.9962 15.9873C14.734 15.9895 14.4814 15.8888 14.2928 15.7066L9.99979 11.4136L5.70679 15.7066C5.51818 15.8888 5.26558 15.9895 5.00339 15.9873C4.74119 15.985 4.49038 15.8798 4.30497 15.6944C4.11956 15.509 4.01439 15.2582 4.01211 14.996C4.00983 14.7338 4.11063 14.4812 4.29279 14.2926L8.58579 9.99959L4.29279 5.70659C4.10532 5.51907 4 5.26476 4 4.99959C4 4.73443 4.10532 4.48012 4.29279 4.29259Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const errorIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g id="exclamation">
      <path
        id="Vector"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.90822 3.71912C10.8262 2.08712 13.1746 2.08712 14.0914 3.71912L20.7874 15.6231C21.6874 17.2239 20.5318 19.1991 18.697 19.1991H5.30382C3.46782 19.1991 2.31222 17.2239 3.21222 15.6231L9.90822 3.71912ZM13.1998 15.6003C13.1998 15.9186 13.0734 16.2238 12.8483 16.4488C12.6233 16.6739 12.3181 16.8003 11.9998 16.8003C11.6816 16.8003 11.3763 16.6739 11.1513 16.4488C10.9262 16.2238 10.7998 15.9186 10.7998 15.6003C10.7998 15.2821 10.9262 14.9768 11.1513 14.7518C11.3763 14.5267 11.6816 14.4003 11.9998 14.4003C12.3181 14.4003 12.6233 14.5267 12.8483 14.7518C13.0734 14.9768 13.1998 15.2821 13.1998 15.6003ZM11.9998 6.00032C11.6816 6.00032 11.3763 6.12675 11.1513 6.35179C10.9262 6.57683 10.7998 6.88206 10.7998 7.20032V10.8003C10.7998 11.1186 10.9262 11.4238 11.1513 11.6488C11.3763 11.8739 11.6816 12.0003 11.9998 12.0003C12.3181 12.0003 12.6233 11.8739 12.8483 11.6488C13.0734 11.4238 13.1998 11.1186 13.1998 10.8003V7.20032C13.1998 6.88206 13.0734 6.57683 12.8483 6.35179C12.6233 6.12675 12.3181 6.00032 11.9998 6.00032Z"
        fill="#FF6681"
      />
    </g>
  </svg>
);

@Component({
  tag: 'd-feedback',
  styleUrl: 'd-feedback.css',
  shadow: true,
})
export class DFeedback {
  @Prop() type: 'success' | 'error' = 'success';
  @Prop() feedback: string = '';
  @Prop() message: string | undefined = undefined;
  @Event() dClose!: EventEmitter<void>;
  @State() hide: boolean = true;

  private onClose = () => {
    this.dClose.emit();
    this.feedback = '';
  };

  render() {
    const onClick = () => (this.hide = !this.hide);
    return (
      <Host>
        <div
          class={{
            'flex flex-col gap-3  bg-primary px-4 py-2 rounded-md !border-[3px] !border-solid mb-4': this.feedback !== '',
            'border-success': this.type === 'success',
            'border-error': this.type === 'error',
            'hidden': this.feedback === '',
          }}
        >
          <div class="flex justify-between items-center self-stretch w-full">
            <div class="flex gap-2 items-center self-stretch">
              <div class="w-6 h-6">{this.type === 'success' ? successIcon : errorIcon}</div>
              <d-text>{this.feedback}</d-text>
            </div>
            <button onClick={this.onClose} class="w-12 h-12">
              <div class="w-full h-full flex items-center justify-end">{closeIcon}</div>
            </button>
          </div>
          {this.message && (
            <div class="flex flex-col gap-2 items-start break-all">
              {!this.hide && (
                <d-vertical-stack gap={2}>
                  <d-text size="s" class="text-on-alt">
                    <div class="break-words" innerHTML={converter.toHtml(this.message)} />
                  </d-text>
                  <d-copy-button textToCopy={this.message} />
                </d-vertical-stack>
              )}
              <button onClick={onClick} class="h-12 text-on text-base font-bold leading-5 underline">
                {this.hide ? 'See more' : 'Show less'}
              </button>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
