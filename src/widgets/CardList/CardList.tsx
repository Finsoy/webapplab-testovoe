import { Button } from '@/shared/ui-kit';
import { useCards } from './hook';

import { SelectedArrowIcon } from '@/shared/assets/icons';
import { DrawerCardWrapper } from '../DrawerCard';
import { FC } from 'react';

import styles from './CardList.module.scss';
import { CardsListSkeleton } from './Skeletson';

interface ICardListProps {
  onlyFavorites?: boolean;
}

export const CardList: FC<ICardListProps> = ({ onlyFavorites }) => {
  const { cards, hasNextPage, fetchNext, isLoading, isFetchingNextPage } = useCards(onlyFavorites);

  if (isLoading) {
    return <CardsListSkeleton />;
  }

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
