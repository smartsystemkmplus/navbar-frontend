export default function Png({ size }) {
  let rescale = size;
  if (!size) {
    rescale = 0;
  }
  return (
    <svg
      width={93 + rescale}
      height={114 + rescale}
      viewBox="0 0 93 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.1985 0C23.7081 0 20.3607 1.38583 17.8927 3.85264C15.4246 6.31944 14.0381 9.66514 14.0381 13.1537V92.0761C14.0381 95.5647 15.4246 98.9104 17.8927 101.377C20.3607 103.844 23.7081 105.23 27.1985 105.23H79.84C83.3303 105.23 86.6777 103.844 89.1458 101.377C91.6138 98.9104 93.0004 95.5647 93.0004 92.0761V35.6071C92.998 32.9916 91.9566 30.484 90.1051 28.6357L64.3502 2.88724C62.4999 1.03902 59.9911 0.000558253 57.3752 0H27.1985ZM20.6183 13.1537C20.6183 11.4094 21.3115 9.73658 22.5456 8.50318C23.7796 7.26978 25.4533 6.57686 27.1985 6.57686H53.5192V29.5959C53.5192 32.2123 54.5591 34.7216 56.4102 36.5717C58.2612 38.4218 60.7717 39.4612 63.3895 39.4612H86.4202V92.0761C86.4202 93.8204 85.7269 95.4932 84.4929 96.7266C83.2588 97.96 81.5852 98.6529 79.84 98.6529H27.1985C25.4533 98.6529 23.7796 97.96 22.5456 96.7266C21.3115 95.4932 20.6183 93.8204 20.6183 92.0761V13.1537ZM85.0581 32.8843H63.3895C62.5169 32.8843 61.6801 32.5379 61.063 31.9212C60.446 31.3045 60.0994 30.468 60.0994 29.5959V7.93827L85.0581 32.8843Z"
        fill="#F2F4F8"
      />
      <path
        d="M55.5 59L63.7272 73.25H47.2728L55.5 59Z"
        fill="#F2F4F8"
      />
      <circle cx="62.5" cy="56.5" r="6.5" fill="#F2F4F8" />
      <rect
        x="33.316"
        y="46.316"
        width="40.3679"
        height="32.3679"
        rx="2.1934"
        stroke="#F2F4F8"
        strokeWidth="2.63208"
      />
      <rect x="40" y="57" width="12" height="11" fill="#F2F4F8" />
      <rect
        y="91.1992"
        width="45.6226"
        height="22.7998"
        rx="1.75472"
        fill="#AAAAAA"
      />
      <path
        d="M10.204 108V98.228H14.404C15.3093 98.228 16.0093 98.494 16.504 99.026C16.9987 99.558 17.246 100.272 17.246 101.168C17.246 102.064 16.9987 102.778 16.504 103.31C16.0093 103.842 15.3093 104.108 14.404 104.108H11.786V108H10.204ZM11.786 102.722H14.306C14.7073 102.722 15.02 102.619 15.244 102.414C15.468 102.199 15.58 101.896 15.58 101.504V100.832C15.58 100.44 15.468 100.141 15.244 99.936C15.02 99.7213 14.7073 99.614 14.306 99.614H11.786V102.722ZM21.6133 102.596L20.5353 100.524H20.4933V108H18.9813V98.228H20.7453L23.9373 103.632L25.0153 105.704H25.0573V98.228H26.5693V108H24.8053L21.6133 102.596ZM35.2615 106.516H35.2055C35.1028 106.992 34.8228 107.389 34.3655 107.706C33.9175 108.014 33.3202 108.168 32.5735 108.168C31.9948 108.168 31.4582 108.061 30.9635 107.846C30.4688 107.622 30.0395 107.3 29.6755 106.88C29.3208 106.451 29.0408 105.923 28.8355 105.298C28.6395 104.663 28.5415 103.935 28.5415 103.114C28.5415 102.302 28.6442 101.583 28.8495 100.958C29.0548 100.323 29.3442 99.7913 29.7175 99.362C30.0908 98.9327 30.5388 98.6107 31.0615 98.396C31.5842 98.172 32.1675 98.06 32.8115 98.06C33.6888 98.06 34.4308 98.256 35.0375 98.648C35.6442 99.0307 36.1155 99.5673 36.4515 100.258L35.1635 101.014C34.9768 100.557 34.6875 100.188 34.2955 99.908C33.9035 99.6187 33.4088 99.474 32.8115 99.474C32.0368 99.474 31.4115 99.7213 30.9355 100.216C30.4688 100.711 30.2355 101.411 30.2355 102.316V103.912C30.2355 104.817 30.4688 105.517 30.9355 106.012C31.4115 106.507 32.0368 106.754 32.8115 106.754C33.1195 106.754 33.4135 106.717 33.6935 106.642C33.9735 106.558 34.2162 106.441 34.4215 106.292C34.6362 106.133 34.8042 105.942 34.9255 105.718C35.0562 105.485 35.1215 105.214 35.1215 104.906V104.15H33.1055V102.792H36.6475V108H35.2615V106.516Z"
        fill="white"
      />
    </svg>
  );
}
