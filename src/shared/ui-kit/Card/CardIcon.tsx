import { FC } from 'react';
import parse from 'html-react-parser';

interface ICardIconProps {
  src: string;
  className?: string;
}

export const CardIcon: FC<ICardIconProps> = ({ src, className }) => {
  const parsedSrc = parse(src);

  return (
    <div className={className} role="img">
      {parsedSrc}
    </div>
  );
};
