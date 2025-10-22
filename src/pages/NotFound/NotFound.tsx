import { GlobeIcon } from '@/shared/assets/icons';

import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={styles.not_found}>
      <GlobeIcon />
      <h3>Страница не найдена</h3>
      <span>Попробуйте зайти на другую страницу</span>
    </div>
  );
};
