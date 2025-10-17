import { Button } from '@/shared/ui-kit';
import { useCards } from './hook';

import styles from './CardList.module.scss';
import { SelectedArrowIcon } from '@/shared/assets/icons';
import { DrawerCardWrapper } from '../DrawerCard';
import { FC } from 'react';
import { Skeleton } from 'antd';

interface ICardListProps {
  onlyFavorites?: boolean;
}

export const CardList: FC<ICardListProps> = ({ onlyFavorites }) => {
  const { cards, hasNextPage, fetchNext, isLoading, isFetchingNextPage } = useCards(onlyFavorites);

  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card_list}>
          {Array.from(new Array(15)).map(() => (
            <Skeleton.Node style={{ width: 227, height: 328, borderRadius: 15 }} active />
          ))}
        </div>
      </div>
    );
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
