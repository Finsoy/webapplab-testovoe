import { CloseIcon, StarIcon } from '@/shared/assets/icons';
import styles from './DrawerCard.module.scss';
import { FC } from 'react';
import { CardIcon } from '@/shared/ui-kit/Card/CardIcon';
import { ICardProps } from '@/shared/ui-kit/Card';
import { Button, Favorite } from '@/shared/ui-kit';

interface IDrawerCardProps extends Omit<ICardProps, 'onClick'> {
  onClose: () => void;
}

export const DrawerCard: FC<IDrawerCardProps> = ({
  onClose,
  category,
  city,
  icon,
  logo,
  rating,
  title,
  isFavorite,
  description,
  handleIsFavorite,
}) => {
  const paragraphs = description?.split(/\n+/);

  return (
    <div className={styles.drawer}>
      <div className={styles.close_icon} onClick={onClose}>
        <CloseIcon />
      </div>

      <div className={styles.logo}>
        <CardIcon src={logo} />
        <CardIcon src={icon} />
      </div>

      <div className={styles.card_wrapper}>
        <div className={styles.card_info}>
          <div className={styles.title}>{title}</div>
          <div className={styles.info}>
            <div className={styles.rating}>
              <StarIcon />
              {rating}
            </div>
            <span>{category}</span>
            <span>{city}</span>
          </div>
          {paragraphs?.map((par, index) => (
            <p key={index} className={styles.description}>
              {par}
            </p>
          ))}
        </div>
        <Button
          iconPosition="start"
          icon={<Favorite isFilled={isFavorite} ghost />}
          onClick={handleIsFavorite}
        >
          Добавить в избранное
        </Button>
      </div>
    </div>
  );
};
