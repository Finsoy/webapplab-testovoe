import { Outlet } from 'react-router';
import { Filters } from '../Filters';
import { Header } from '../Header';
import { Footer } from '../Footer';

import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Filters />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
