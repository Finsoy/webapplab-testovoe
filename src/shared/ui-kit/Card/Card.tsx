import { FC } from 'react';
import { Favorite } from '../Favorite';
import styles from './Card.module.scss';
import { CardIcon } from './CardIcon';
import { StarIcon } from '@/shared/assets/icons';
import { ICard } from '@/entities/card';

export interface ICardProps extends ICard {
  onClick?: () => void;
  handleIsFavorite: () => void;
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
  handleIsFavorite,
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

      <div className={styles.card_favorite} onClick={handleIsFavorite}>
        <Favorite isFilled={isFavorite} />
      </div>
    </div>
  );
};
