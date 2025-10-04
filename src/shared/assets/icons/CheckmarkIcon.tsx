import { FC, SVGProps } from 'react';

export const CheckmarkIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={12}
      height={11}
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.78955 6.22626L4.87755 9.48047L10.7104 1.01953"
        stroke="#222222"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
