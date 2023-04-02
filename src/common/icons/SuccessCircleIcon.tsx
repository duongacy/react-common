import * as React from "react";

export const SuccessCircleIcon: React.FunctionComponent<
  React.SVGProps<SVGSVGElement>
> = ({ className, ...props }) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`tw-flex-shrink-0 ${className}`}
      {...props}
    >
      <g clipPath="url(#clip0_725_7629)">
        <path
          d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8Z"
          fill="white"
          fillOpacity="0.01"
        />
        <path
          d="M8 2C4.7 2 2 4.7 2 8C2 11.3 4.7 14 8 14C11.3 14 14 11.3 14 8C14 4.7 11.3 2 8 2ZM10.7802 7.03025L7.78025 10.0302C7.634 10.1765 7.442 10.25 7.25 10.25C7.058 10.25 6.866 10.1765 6.71975 10.0302L5.21975 8.53025C4.9265 8.237 4.9265 7.763 5.21975 7.46975C5.513 7.1765 5.987 7.1765 6.28025 7.46975L7.25 8.4395L9.71975 5.96975C10.013 5.6765 10.487 5.6765 10.7802 5.96975C11.0735 6.263 11.0735 6.737 10.7802 7.03025Z"
          fill="#5AB65F"
        />
      </g>
      <defs>
        <clipPath id="clip0_725_7629">
          <rect width={16} height={16} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
