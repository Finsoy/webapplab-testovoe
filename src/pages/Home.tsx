import { CardList } from '@/widgets/CardList';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <main className={styles.main}>
      <CardList />
    </main>
  );
};
