import { HeartFillIcon } from '@/shared/assets/icons';
import { HeartUnfilledIcon } from '@/shared/assets/icons';
import { FC, useState } from 'react';

import cx from 'classnames';
import styles from './Favorite.module.scss';

interface IFavoriteProps {
  /**
   * If true, renders the filled heart by default; otherwise outline until hover.
   */
  isFilled?: boolean;

  ghost?: boolean;
}

export const Favorite: FC<IFavoriteProps> = ({ isFilled, ghost }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (type: 'hover' | 'leave') => {
    setIsHovered(type === 'hover');
  };

  return (
    <div
      role="button"
      className={cx(styles.favorite, {
        [styles.ghost]: ghost,
      })}
      onMouseEnter={() => handleHover('hover')}
      onMouseLeave={() => handleHover('leave')}
    >
      {isFilled || isHovered ? <HeartFillIcon /> : <HeartUnfilledIcon />}
    </div>
  );
};
