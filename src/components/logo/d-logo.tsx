import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'd-logo',
  styleUrl: 'd-logo.css',
  shadow: true,
})
export class DLogo {
  render() {
    return (
      <Host>
        <div class="w-full flex flex-col gap-2 items-center justify-items-center">
          <svg width="80" height="87" viewBox="0 0 80 87" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.6431 26.9208V17.1029L58.3652 17.2907V33.5177C58.3369 33.4551 58.3051 33.3888 58.2732 33.3262C55.6795 28.132 51.9818 24.2151 47.6331 21.8775C43.5497 19.6798 38.893 18.8773 34.0383 19.7129C31.8515 20.0884 29.8063 20.821 27.8849 21.8775C25.6309 23.1217 23.5538 24.8151 21.6431 26.9208ZM58.3652 54.1879V71.9278H46.4583C46.4972 71.8837 46.5326 71.8285 46.5751 71.8027C47.3606 71.3352 47.6861 70.529 47.6543 69.5093C47.6224 68.4896 47.1271 67.8785 46.3663 67.5545C46.1929 67.4809 46.016 67.4183 45.8426 67.3521C44.2927 66.7446 42.8102 65.9642 41.4089 64.985C41.3983 64.9777 41.3877 64.9703 41.377 64.9629C40.7932 64.5543 40.22 64.1089 39.6644 63.6267C34.8627 59.4816 32.269 53.9118 32.2726 46.6413C32.2726 45.5443 32.4566 44.5099 32.9307 43.5675C34.1657 41.1121 36.7487 39.8972 39.1195 40.6666C40.9064 41.2483 43.0224 43.2325 42.9729 46.7591C42.9446 48.9237 43.5462 50.8858 44.6431 52.6049C47.2191 56.6543 51.8757 58.2042 55.7255 56.1611C56.7198 55.631 57.6115 54.9757 58.3652 54.1879ZM45.5772 71.9278H21.6431V50.952C21.9403 53.8161 22.609 56.6175 23.6423 59.3306C24.3995 61.3258 25.3054 63.1922 26.3315 64.9629L26.335 64.9703C27.4461 66.8919 28.6988 68.6994 30.0398 70.4223C30.836 71.4456 31.8621 71.5303 32.7149 70.5953C33.5323 69.6934 33.5641 68.4417 32.7857 67.3852C32.2974 66.7189 31.7878 66.071 31.303 65.401C31.2004 65.2611 31.0978 65.1175 30.9987 64.974L30.9881 64.9629C27.3683 59.8202 25.0506 54.0517 25.2523 47.7309C25.1603 44.5246 25.4823 42.1244 26.5261 39.9709C28.7943 35.2957 32.1523 32.6563 36.6072 32.2476C41.232 31.8243 45.0465 33.8121 47.994 38.1855C49.6358 40.6188 50.2869 43.4828 50.3081 46.6045C50.3152 47.9003 51.1503 48.7764 52.2826 48.7543C53.2592 48.7323 54.0306 47.8193 54.0341 46.6155C54.0412 43.3061 53.4609 40.1623 52.0208 37.3314C46.9325 27.3147 36.8832 25.4851 29.9443 29.9652C25.4009 32.8955 22.3614 37.3867 21.6678 43.7516C21.6607 43.8362 21.6501 43.9172 21.6431 44.0019V33.2489C21.7351 33.1127 21.8306 32.9728 21.9261 32.8366C27.524 24.8262 36.7381 21.8444 45.0252 25.7097C51.4617 28.71 55.8706 34.1435 57.1728 42.7245C57.3674 44.0166 57.424 45.3529 57.4169 46.6671C57.4063 49.1519 56.0086 51.3202 53.9811 52.1669C51.7766 53.0909 49.2537 52.211 47.7605 50.0207C47.0068 48.9126 46.7379 47.6316 46.7202 46.2254C46.6919 43.9577 46.108 41.922 44.9368 40.1513C42.1201 35.8884 37.0743 34.6588 33.1678 37.3535C30.5281 39.172 28.858 41.8925 28.6775 45.6621C28.4758 49.8367 29.088 53.875 30.6131 57.6446C31.7701 60.4976 33.2527 62.9235 35.0255 64.9629L35.0361 64.9777C37.0318 67.2711 39.3955 69.0713 42.0742 70.437C43.2135 71.015 44.4095 71.4345 45.5772 71.9278ZM51.7695 64.9629H52.2402C52.9691 64.8194 54.0837 64.6464 55.1735 64.3482C56.1254 64.0905 56.5924 63.1223 56.4544 61.9701C56.3271 60.9099 55.5451 60.0816 54.6427 60.1074C54.1509 60.1258 53.6626 60.2362 53.1708 60.3025C48.5106 60.9357 44.6749 59.014 41.6743 54.6517C40.0466 52.2884 39.4769 49.4538 39.4309 46.4168C39.4132 45.0584 38.6383 44.1823 37.5732 44.2117C36.54 44.2412 35.804 45.1504 35.7934 46.4572C35.7651 49.417 36.1967 52.2773 37.4034 54.8542C40.496 61.4621 45.2658 64.5985 51.7695 64.9629Z"
              fill="var(--accent, #223360)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M58.3656 0.0181885L80.0002 21.8774H47.6347C43.549 19.6797 38.8896 18.8773 34.0353 19.7129C31.8509 20.0884 29.8026 20.8209 27.8866 21.8774H0.00390625L21.5834 0.0181885H58.3656Z"
              fill="var(--accent, #223360)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.00012207 0.0181885H21.6421V26.9207H21.6384C21.5428 27.0312 21.4435 27.138 21.3479 27.2484C18.1853 30.834 15.9052 35.0858 14.905 40.2579C13.5995 47.0057 14.5078 53.5436 16.273 59.9821C16.5635 61.046 17.4645 61.5945 18.3471 61.3737C19.579 61.0681 20.2079 59.7981 19.7739 58.3587C18.6854 54.7401 18.0271 51.0182 17.9315 47.1603C17.7991 41.9587 18.9575 37.2872 21.6384 33.2526L21.6421 33.2489V44.0018C21.6384 44.0129 21.6384 44.0203 21.6384 44.0276C21.403 46.3542 21.403 48.655 21.6384 50.9189C21.6384 50.93 21.6384 50.941 21.6421 50.952V86.8222L0.00012207 64.9629V0.0181885Z"
              fill="var(--accent, #223360)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M79.9961 64.9635L58.4166 86.8228L-0.000167847 86.8228V64.9635L21.6344 64.9635H21.6381H26.3269L26.3306 64.9709C27.4449 66.8925 28.6952 68.6999 30.0338 70.4227C30.8319 71.4461 31.8578 71.5309 32.711 70.5958C33.5311 69.6939 33.5605 68.4422 32.7846 67.3857C32.2918 66.7194 31.7843 66.0715 31.2989 65.4015C31.1959 65.2617 31.0966 65.1181 30.9937 64.9745L30.9863 64.9635H35.0205L35.0352 64.9782C37.0284 67.2717 39.393 69.0717 42.0702 70.4338C43.2102 71.0154 44.4054 71.4351 45.5749 71.9284H46.4538C46.4942 71.8842 46.5273 71.829 46.5715 71.8032C47.3584 71.3357 47.682 70.5258 47.6526 69.5098C47.6195 68.4901 47.1231 67.8791 46.3618 67.5551C46.189 67.4815 46.0125 67.4189 45.8396 67.3526C44.2877 66.7452 42.8094 65.9648 41.4083 64.9856C41.3972 64.9782 41.3862 64.9709 41.3752 64.9635H79.9961Z"
              fill="var(--accent, #223360)"
            />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M58.3643 0.0181885V21.8762H52.9609L58.3643 0.0181885Z" fill="var(--accent, #223360)" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M58.3643 86.8195L58.3643 64.9615H52.9609L58.3643 86.8195Z" fill="var(--accent, #223360)" />
            <path d="M52.2373 64.9614C52.2067 64.9673 52.1766 64.9734 52.1474 64.9793C52.0205 64.9743 51.8941 64.9684 51.7686 64.9614H52.2373Z" fill="var(--accent, #223360)" />
            <path d="M58.3647 33.5154C60.4966 37.8703 61.3965 42.6737 61.0492 47.7245C60.8606 50.4691 59.8879 52.5999 58.3647 54.1882V33.5154Z" fill="var(--accent, #223360)" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M58.3652 0.0181885L79.9999 21.8774V64.9629L58.3652 86.8222V0.0181885Z" fill="var(--accent, #223360)" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.000116348 21.8591L0.000116348 -0.0001297L21.6348 -0.0001297L0.000116348 21.8591Z" fill="var(--accent, #223360)" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M58.3614 86.8228V64.9635H79.9961L58.3614 86.8228Z" fill="var(--accent, #223360)" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M58.3614 0.0181885V21.8774L79.9961 21.8774L58.3614 0.0181885Z" fill="var(--accent, #223360)" />
            <path d="M79.9999 21.8771H58.3652V64.9632H79.9999V21.8771Z" fill="var(--accent, #223360)" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.00390625 64.9625V21.8771H21.6421V26.9204C21.5465 27.0308 21.4473 27.1376 21.3517 27.2481C18.1891 30.8336 15.909 35.0854 14.9087 40.2576C13.6032 47.0053 14.5079 53.5432 16.2731 59.9818C16.5673 61.0457 17.4645 61.5942 18.3508 61.3733C19.5791 61.0677 20.208 59.7977 19.7777 58.3584C18.6892 54.7397 18.0309 51.0179 17.9353 47.1599C17.8029 41.9583 18.9576 37.2869 21.6421 33.2522V44.0273C21.4068 46.3538 21.4068 48.6546 21.6385 50.9186V64.9625V65.0067L0.00390625 64.9625Z"
              fill="var(--accent, #223360)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M58.3652 86.822H21.6382V65.0069V64.9626H21.6419L26.3343 64.97C27.4486 66.8916 28.6953 68.6992 30.0376 70.422C30.8356 71.4454 31.8616 71.53 32.7148 70.595C33.5349 69.6931 33.5643 68.4415 32.7847 67.3849C32.2955 66.7186 31.788 66.0707 31.3026 65.4007C31.1996 65.2608 31.0967 65.1173 30.9974 64.9737L35.039 64.9774C37.0322 67.2708 39.3931 69.071 42.074 70.4367C43.214 71.0147 44.4092 71.4343 45.5786 71.9276H46.4575C46.498 71.8834 46.5311 71.8282 46.5752 71.8024C47.3622 71.3349 47.6858 70.5287 47.6527 69.509C47.6233 68.4893 47.1268 67.8782 46.3656 67.5543C46.1927 67.4806 46.0162 67.4217 45.8434 67.3518C44.2915 66.7444 42.8131 65.964 41.412 64.9848L58.3652 65.0069V86.822Z"
              fill="var(--accent, #223360)"
            />
          </svg>
          <d-heading size="s" class="text-accent">
            DidroomWallet
          </d-heading>
        </div>
      </Host>
    );
  }
}
