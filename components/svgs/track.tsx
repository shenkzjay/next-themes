interface colorProp {
  color: string;
}

export const Track = ({ color }: colorProp) => {
  return (
    <div className={`h-full text-${color}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1512"
        height="854"
        viewBox="0 0 1512 854"
        fill="currentColor"
      >
        <g clipPath="url(#clip0_1526_14294)">
          <path
            d="M78 0H-95V408.5V853.5H78L303 408.5L78 0Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            id="arrow1"
          />
          <path
            d="M262 0H89L298.5 408.5L89 853.5H262L487 408.5L262 0Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            id="arrow2"
          />
          <path
            d="M581.5 0H271L480.5 408.5L271 853.5H581.5L806.5 408.5L581.5 0Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            id="arrow3"
          />
          <path
            d="M1072 0H588L797.5 408.5L588 853.5H1072L1297 408.5L1072 0Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            id="arrow4"
          />
          <path
            d="M1691.5 0H1081L1290.5 408.5L1081 853.5H1691.5L1916.5 408.5L1691.5 0Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            id="arrow5"
          />
        </g>
        <defs>
          <clipPath id="clip0_1526_14294">
            <rect width="2160" height="854" fill="currentColor" transform="translate(-241)" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
