import { Card } from '@/shared/ui-kit';
import { useCards } from './hook';

import styles from './CardList.module.scss';

export const CardList = () => {
  const { cards } = useCards();

  return (
    <div className={styles.card_list}>
      {cards?.map(({ id, ...card }) => {
        return <Card key={id} {...card} />;
      })}
    </div>
  );
};
