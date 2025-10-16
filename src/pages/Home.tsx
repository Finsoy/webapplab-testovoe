import { HomeTabs } from '@/widgets/HomeTabs';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <main className={styles.main}>
      <HomeTabs />
    </main>
  );
};
