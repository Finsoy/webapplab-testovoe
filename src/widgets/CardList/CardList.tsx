import { Button } from '@/shared/ui-kit';
import { useCards } from './hook';

import styles from './CardList.module.scss';
import { SelectedArrowIcon } from '@/shared/assets/icons';
import { DrawerCardWrapper } from '../DrawerCard';

export const CardList = () => {
  const { cards, hasNextPage, fetchNext, isLoading, isFetchingNextPage } = useCards();

  if (isLoading) {
    return <div>Loading...</div>;
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
