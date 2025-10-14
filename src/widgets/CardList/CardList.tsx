import { Button } from '@/shared/ui-kit';
import { useCards } from './hook';

import styles from './CardList.module.scss';
import { useState } from 'react';
import { SelectedArrowIcon } from '@/shared/assets/icons';
import { DrawerCardWrapper } from '../DrawerCard';

export const CardList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { cards, isNext, fetchCards } = useCards();

  const handleClick = async () => {
    await fetchCards(currentPage + 1, false);
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card_list}>
        {cards?.map(({ id, ...card }) => {
          return <DrawerCardWrapper key={id} {...card} />;
        })}
      </div>

      {isNext && (
        <Button
          className={styles.button}
          onClick={handleClick}
          iconPosition="end"
          icon={<SelectedArrowIcon />}
        >
          Показать еще
        </Button>
      )}
    </div>
  );
};
