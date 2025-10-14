import { FC } from 'react';
import { Favorite } from '../Favorite';
import styles from './Card.module.scss';
import { CardIcon } from './CardIcon';
import { StarIcon } from '@/shared/assets/icons';

export interface ICardProps {
  logo: string;
  icon: string;
  isFavorite?: boolean;
  title: string;
  category: string;
  city: string;
  rating: number;
  onClick?: () => void;
  description?: string;
}

export const Card: FC<ICardProps> = ({
  logo,
  icon,
  isFavorite,
  title,
  category,
  city,
  rating,
  onClick,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <CardIcon src={logo} />
        <CardIcon src={icon} />
      </div>
      <div className={styles.card_info__wrapper}>
        <div className={styles.card_info}>
          <div className={styles.title}>{title}</div>
          <div className={styles.info}>
            <span>{category}</span>
            <span>{city}</span>
          </div>
          <div className={styles.rating}>
            <StarIcon />
            {rating}
          </div>
        </div>

        <div role="button" className={styles.card_button} onClick={onClick}>
          Подробнее
        </div>
      </div>

      <div className={styles.card_favorite}>
        <Favorite isFilled={isFavorite} />
      </div>
    </div>
  );
};
