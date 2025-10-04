import { FC, SVGProps } from 'react';

export const SelectedArrowIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={12}
      height={8}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.25 1.375L6 6.625L0.75 1.375"
        stroke="#0084FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
