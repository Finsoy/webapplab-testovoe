import { Outlet } from 'react-router';

import styles from './Layout.module.scss';

export const MobileSearchLayout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};
