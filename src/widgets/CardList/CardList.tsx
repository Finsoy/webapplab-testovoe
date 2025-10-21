import { Button } from '@/shared/ui-kit';
import { useCards } from './hook';

import { SelectedArrowIcon } from '@/shared/assets/icons';
import { DrawerCardWrapper } from '../DrawerCard';
import { FC } from 'react';

import styles from './CardList.module.scss';
import { CardsListSkeleton } from './Skeletson';
import { EmptyCardList } from './EmptyCardList';

interface ICardListProps {
  onlyFavorites?: boolean;
  onBack?: () => void;
}

export const CardList: FC<ICardListProps> = ({ onlyFavorites, onBack }) => {
  const { cards, hasNextPage, fetchNext, isLoading, isFetchingNextPage } = useCards(onlyFavorites);

  if (isLoading) {
    return <CardsListSkeleton />;
  }

  if (onlyFavorites && cards.length <= 0) return <EmptyCardList onBack={onBack} />;

  return (
    <div className={styles.wrapper}>
      <div className={styles.card_list}>
        {cards?.map(({ id, ...card }) => {
          return <DrawerCardWrapper key={id} id={id} {...card} />;
        })}
      </div>

      {hasNextPage && (
        <Button
          className={styles.button}
          onClick={fetchNext}
          iconPosition="end"
          icon={<SelectedArrowIcon />}
          loading={isFetchingNextPage}
          disabled={isFetchingNextPage}
        >
          Показать еще
        </Button>
      )}
    </div>
  );
};
