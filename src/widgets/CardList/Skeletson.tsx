import { Skeleton } from 'antd';
import styles from './CardList.module.scss';

export const CardsListSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card_list}>
        {Array.from(new Array(15)).map(() => (
          <Skeleton.Node style={{ width: 227, height: 328, borderRadius: 15 }} active />
        ))}
      </div>
    </div>
  );
};
