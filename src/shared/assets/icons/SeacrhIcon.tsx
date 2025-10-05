import { FC, SVGProps } from 'react';

export const SeacrhIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.82491 14.5664C11.5481 14.5664 14.5663 11.5481 14.5663 7.82494C14.5663 4.10176 11.5481 1.08353 7.82491 1.08353C4.10173 1.08353 1.0835 4.10176 1.0835 7.82494C1.0835 11.5481 4.10173 14.5664 7.82491 14.5664Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5137 12.8639L15.1567 15.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
