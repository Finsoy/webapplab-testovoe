import { HeartFillIcon } from '@/shared/assets/icons';
import { HeartUnfilledIcon } from '@/shared/assets/icons';
import { FC, useState } from 'react';
import styles from './Favorite.module.scss';

interface IFavoriteProps {
  /**
   * If true, renders the filled heart by default; otherwise outline until hover.
   */
  isFilled?: boolean;
}

export const Favorite: FC<IFavoriteProps> = ({ isFilled }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (type: 'hover' | 'leave') => {
    setIsHovered(type === 'hover');
  };

  return (
    <div
      role="button"
      className={styles.favorite}
      onMouseEnter={() => handleHover('hover')}
      onMouseLeave={() => handleHover('leave')}
    >
      {isFilled || isHovered ? <HeartFillIcon /> : <HeartUnfilledIcon />}
    </div>
  );
};
