import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'd-header',
  styleUrl: 'd-header.css',
  shadow: true,
})
export class DHeader {
  @Prop() backButton: boolean = false;
  @Prop() settings: boolean = false;
  @State() isSettingsOpen: boolean = false;

  render() {
    
    const arrowBack = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Icon/outline/arrow-back">
          <path
            id="Vector"
            d="M7.37305 12.75L12.5423 17.9192C12.691 18.0679 12.7644 18.242 12.7625 18.4413C12.7606 18.6407 12.682 18.8179 12.5269 18.973C12.3718 19.1179 12.1962 19.1929 12 19.198C11.8039 19.2032 11.6282 19.1282 11.4731 18.973L5.13273 12.6327C5.03914 12.5391 4.97312 12.4404 4.93465 12.3365C4.89619 12.2327 4.87695 12.1205 4.87695 12C4.87695 11.8795 4.89619 11.7673 4.93465 11.6635C4.97312 11.5596 5.03914 11.4609 5.13273 11.3673L11.4731 5.02693C11.6116 4.88847 11.783 4.81763 11.9875 4.81443C12.192 4.81123 12.3718 4.88207 12.5269 5.02693C12.682 5.18205 12.7596 5.36025 12.7596 5.56153C12.7596 5.76282 12.682 5.94102 12.5269 6.09614L7.37305 11.25H18.75C18.9628 11.25 19.141 11.3218 19.2846 11.4654C19.4282 11.609 19.5 11.7872 19.5 12C19.5 12.2128 19.4282 12.391 19.2846 12.5346C19.141 12.6782 18.9628 12.75 18.75 12.75H7.37305Z"
            fill="currentColor"
          />
        </g>
      </svg>
    );

    const more = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.3149 15.4038L19.4 15L20.3191 15.3939C20.3691 15.2774 20.452 15.178 20.5577 15.1081C20.663 15.0383 20.7863 15.0008 20.9125 15H21C21.7957 15 22.5587 14.6839 23.1213 14.1213C23.6839 13.5587 24 12.7957 24 12C24 11.2043 23.6839 10.4413 23.1213 9.87868C22.5587 9.31607 21.7957 9 21 9H20.8325C20.7063 8.99921 20.583 8.96167 20.4777 8.89195C20.4068 8.84498 20.3461 8.78479 20.2988 8.71507C20.2845 8.64692 20.2631 8.58027 20.2349 8.51624C20.1824 8.39742 20.1668 8.26561 20.19 8.13782C20.2129 8.01142 20.2727 7.89468 20.3619 7.80231L20.4167 7.7475C20.6955 7.46896 20.917 7.13784 21.0679 6.77382C21.2189 6.40963 21.2966 6.01925 21.2966 5.625C21.2966 5.23075 21.2189 4.84037 21.0679 4.47618C20.9171 4.11233 20.6961 3.78174 20.4175 3.50329C20.1389 3.22436 19.808 3.00308 19.4438 2.85211C19.0796 2.70113 18.6892 2.62343 18.295 2.62343C17.9008 2.62343 17.5104 2.70113 17.1462 2.85211C16.782 3.00308 16.4511 3.22436 16.1725 3.50329L16.1177 3.55811C16.0253 3.64728 15.9086 3.70713 15.7822 3.73005C15.6544 3.75322 15.5226 3.73758 15.4038 3.68514L15.3939 3.68086C15.2774 3.63092 15.178 3.54801 15.1081 3.44232C15.0383 3.33704 15.0008 3.21374 15 3.0875V3C15 2.20435 14.6839 1.44129 14.1213 0.87868C13.5587 0.316071 12.7956 0 12 0C11.2044 0 10.4413 0.316071 9.87868 0.87868C9.31607 1.44129 9 2.20435 9 3V3.1675C8.99921 3.29374 8.96167 3.41704 8.89195 3.52232C8.84498 3.59323 8.78479 3.6539 8.71507 3.70122C8.64693 3.71549 8.58027 3.73687 8.51624 3.76514C8.39742 3.81758 8.26561 3.83322 8.13782 3.81005C8.01142 3.78713 7.89468 3.72728 7.80231 3.6381L7.7475 3.58329C7.46888 3.30436 7.13802 3.08308 6.77382 2.93211C6.40963 2.78113 6.01925 2.70343 5.625 2.70343C5.23075 2.70343 4.84037 2.78113 4.47618 2.93211C4.11216 3.08301 3.78143 3.30415 3.50289 3.58289C3.22415 3.86143 3.00301 4.19216 2.85211 4.55618C2.70113 4.92037 2.62343 5.31075 2.62343 5.705C2.62343 6.09925 2.70113 6.48963 2.85211 6.85382C3.00308 7.21802 3.22436 7.54888 3.50329 7.8275L3.5581 7.88231C3.64728 7.97468 3.70713 8.09142 3.73005 8.21782C3.75322 8.34561 3.73758 8.47742 3.68514 8.59624C3.67663 8.61551 3.66874 8.63505 3.66146 8.65482C3.61644 8.77723 3.53564 8.88327 3.42955 8.95914C3.32591 9.03327 3.20283 9.07526 3.07564 9.08H3C2.20435 9.08 1.44129 9.39607 0.87868 9.95868C0.316071 10.5213 0 11.2844 0 12.08C0 12.8756 0.316071 13.6387 0.87868 14.2013C1.44129 14.7639 2.20435 15.08 3 15.08H3.1675C3.29374 15.0808 3.41704 15.1183 3.52232 15.1881C3.62801 15.258 3.71092 15.3574 3.76086 15.4739L3.76514 15.4838C3.81758 15.6026 3.83322 15.7344 3.81005 15.8622C3.78713 15.9886 3.72728 16.1053 3.63811 16.1977L3.58329 16.2525C3.30436 16.5311 3.08308 16.862 2.93211 17.2262C2.78113 17.5904 2.70343 17.9808 2.70343 18.375C2.70343 18.7692 2.78113 19.1596 2.93211 19.5238C3.08308 19.888 3.30436 20.2189 3.58329 20.4975C3.86174 20.7761 4.19233 20.9971 4.55618 21.1479C4.92037 21.2989 5.31075 21.3766 5.705 21.3766C6.09925 21.3766 6.48963 21.2989 6.85382 21.1479C7.21784 20.997 7.54857 20.7759 7.82712 20.4971L7.8823 20.4419C7.97467 20.3527 8.09142 20.2929 8.21782 20.27C8.34561 20.2468 8.47742 20.2624 8.59624 20.3149C8.61551 20.3234 8.63505 20.3313 8.65482 20.3385C8.77723 20.3836 8.88326 20.4644 8.95914 20.5704C9.03327 20.6741 9.07526 20.7972 9.08 20.9244V21C9.08 21.7957 9.39607 22.5587 9.95868 23.1213C10.5213 23.6839 11.2843 24 12.08 24C12.8757 24 13.6387 23.6839 14.2013 23.1213C14.7639 22.5587 15.08 21.7957 15.08 21V20.8325C15.0808 20.7063 15.1183 20.583 15.1881 20.4777C15.258 20.372 15.3574 20.2891 15.4739 20.2391L15.4838 20.2349C15.6026 20.1824 15.7344 20.1668 15.8622 20.19C15.9886 20.2129 16.1053 20.2727 16.1977 20.3619L16.2525 20.4167C16.531 20.6955 16.8622 20.917 17.2262 21.0679C17.5904 21.2189 17.9808 21.2966 18.375 21.2966C18.7692 21.2966 19.1596 21.2189 19.5238 21.0679C19.8878 20.917 20.2186 20.6959 20.4971 20.4171C20.7759 20.1386 20.997 19.8078 21.1479 19.4438C21.2989 19.0796 21.3766 18.6892 21.3766 18.295C21.3766 17.9008 21.2989 17.5104 21.1479 17.1462C20.997 16.7822 20.7758 16.4514 20.4971 16.1729L20.4419 16.1177C20.3527 16.0253 20.2929 15.9086 20.27 15.7822C20.2468 15.6544 20.2624 15.5226 20.3149 15.4038ZM11.2929 2.29289C11.4804 2.10536 11.7348 2 12 2C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V3.09L13 3.09399C13.0021 3.6108 13.1552 4.11572 13.4406 4.54661C13.7249 4.97601 14.1282 5.3132 14.6011 5.51701C15.0843 5.72908 15.6198 5.79211 16.139 5.69796C16.66 5.60349 17.1407 5.35512 17.5193 4.98486L17.5271 4.9771L17.5871 4.9171C17.68 4.82413 17.7907 4.74998 17.9121 4.69965C18.0335 4.64933 18.1636 4.62343 18.295 4.62343C18.4264 4.62343 18.5565 4.64933 18.6779 4.69965C18.7993 4.74998 18.9096 4.82374 19.0025 4.91671L19.0033 4.9175C19.0963 5.01037 19.17 5.12066 19.2203 5.24206C19.2707 5.36346 19.2966 5.49359 19.2966 5.625C19.2966 5.75641 19.2707 5.88654 19.2203 6.00794C19.17 6.12934 19.0963 6.23963 19.0033 6.3325L18.9429 6.3929L18.9351 6.40073C18.5649 6.77925 18.3165 7.26 18.222 7.781C18.14 8.23332 18.1773 8.69798 18.3284 9.12961C18.3403 9.22042 18.3646 9.30938 18.4009 9.39393C18.6045 9.86896 18.9425 10.2741 19.3734 10.5594C19.8043 10.8448 20.3092 10.9979 20.826 11L20.83 11H21C21.2652 11 21.5196 11.1054 21.7071 11.2929C21.8946 11.4804 22 11.7348 22 12C22 12.2652 21.8946 12.5196 21.7071 12.7071C21.5196 12.8946 21.2652 13 21 13L20.91 13L20.906 13C20.3892 13.0021 19.8843 13.1552 19.4534 13.4406C19.024 13.725 18.6867 14.1283 18.4829 14.6012C18.2709 15.0843 18.2079 15.6198 18.302 16.139C18.3965 16.66 18.6449 17.1407 19.0151 17.5193L19.0229 17.5271L19.0829 17.5871C19.1759 17.68 19.25 17.7907 19.3003 17.9121C19.3507 18.0335 19.3766 18.1636 19.3766 18.295C19.3766 18.4264 19.3507 18.5565 19.3003 18.6779C19.25 18.7993 19.1763 18.9096 19.0833 19.0025L19.0825 19.0033C18.9896 19.0963 18.8793 19.17 18.7579 19.2203C18.6365 19.2707 18.5064 19.2966 18.375 19.2966C18.2436 19.2966 18.1135 19.2707 17.9921 19.2203C17.8707 19.17 17.7604 19.0963 17.6675 19.0033L17.6071 18.9429L17.5993 18.9351C17.2207 18.5649 16.74 18.3165 16.219 18.222C15.6998 18.1279 15.1643 18.1909 14.6812 18.4029C14.2083 18.6067 13.805 18.944 13.5206 19.3734C13.2352 19.8043 13.0821 20.3092 13.08 20.826L13.08 20.83V21C13.08 21.2652 12.9746 21.5196 12.7871 21.7071C12.5996 21.8946 12.3452 22 12.08 22C11.8148 22 11.5604 21.8946 11.3729 21.7071C11.1854 21.5196 11.08 21.2652 11.08 21V20.91L11.0797 20.8866C11.0673 20.355 10.8952 19.8395 10.5859 19.407C10.2827 18.983 9.86132 18.6581 9.37477 18.4725C8.89796 18.2689 8.37163 18.2095 7.861 18.302C7.34 18.3965 6.85925 18.6449 6.48073 19.0151L6.47288 19.0229L6.41288 19.0829C6.32001 19.1759 6.20934 19.25 6.08794 19.3003C5.96654 19.3507 5.83641 19.3766 5.705 19.3766C5.57359 19.3766 5.44346 19.3507 5.32206 19.3003C5.20066 19.25 5.09037 19.1763 4.9975 19.0833L4.99671 19.0825C4.90374 18.9896 4.82998 18.8793 4.77965 18.7579C4.72933 18.6365 4.70343 18.5064 4.70343 18.375C4.70343 18.2436 4.72933 18.1135 4.77965 17.9921C4.82998 17.8707 4.90374 17.7604 4.99671 17.6675L5.0571 17.6071L5.06486 17.5993C5.43512 17.2207 5.68349 16.74 5.77796 16.219C5.87211 15.6998 5.80908 15.1643 5.59701 14.6811C5.3932 14.2082 5.05601 13.8049 4.62661 13.5206C4.19572 13.2352 3.6908 13.0821 3.17399 13.08L3.17 13.08H3C2.73478 13.08 2.48043 12.9746 2.29289 12.7871C2.10536 12.5996 2 12.3452 2 12.08C2 11.8148 2.10536 11.5604 2.29289 11.3729C2.48043 11.1854 2.73478 11.08 3 11.08H3.09L3.11338 11.0797C3.64498 11.0673 4.16054 10.8952 4.59305 10.5859C5.01698 10.2827 5.34189 9.86133 5.52745 9.37478C5.73113 8.89797 5.79055 8.37163 5.69796 7.861C5.60349 7.34 5.35512 6.85925 4.98486 6.48073L4.97711 6.47289L4.91711 6.41289C4.82413 6.32002 4.74998 6.20934 4.69965 6.08794C4.64933 5.96654 4.62343 5.83642 4.62343 5.705C4.62343 5.57358 4.64933 5.44346 4.69965 5.32206C4.74998 5.20066 4.82374 5.09037 4.91671 4.9975L4.9175 4.99671C5.01037 4.90374 5.12066 4.82998 5.24206 4.77965C5.36346 4.72933 5.49358 4.70343 5.625 4.70343C5.75642 4.70343 5.88654 4.72933 6.00794 4.77965C6.12934 4.82998 6.23963 4.90374 6.3325 4.99671L6.39289 5.05711L6.40073 5.06486C6.77925 5.43512 7.26 5.68349 7.781 5.77796C8.23333 5.85998 8.69798 5.82272 9.12961 5.67157C9.22042 5.65969 9.30938 5.63538 9.39393 5.59914C9.86895 5.39555 10.2741 5.0575 10.5594 4.62661C10.8448 4.19572 10.9979 3.6908 11 3.17399L11 3.17V3C11 2.73478 11.1054 2.48043 11.2929 2.29289Z"
          fill="currentColor"
        />
      </svg>
    );

    return (
      <Host>
        <div>
          <ion-header class="shadow-none" translucent>
            <ion-toolbar>
              {this.backButton && (
                <ion-buttons slot="start">
                  <ion-button onClick={() => window.history.back()} aria-hidden>
                    <div class="w-6 h-6 text-on" slot="icon-only">
                      {arrowBack}
                    </div>
                  </ion-button>
                </ion-buttons>
              )}
              <ion-title class="text-center uppercase">
                <slot />
              </ion-title>
              {this.settings && (
                <ion-buttons slot="end">
                  <ion-menu-toggle>
                    <ion-button>
                      <div class="w-6 h-6 text-on">{more}</div>
                    </ion-button>
                  </ion-menu-toggle>
                </ion-buttons>
              )}
            </ion-toolbar>
          </ion-header>
          <ion-menu content-id="main-content">
            <ion-header>
              <ion-toolbar>
                <ion-title>Settings</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
              <slot name="settings"></slot>
            </ion-content>
          </ion-menu>
        </div>
      </Host>
    );
  }
}
