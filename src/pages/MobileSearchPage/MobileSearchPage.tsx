import { Search } from '@/widgets/Search';
import { CardList } from '@/widgets/CardList';
import { KeyboardEventHandler } from 'react';
import { useNavigate } from 'react-router';
import { Routes } from '@/shared/constants';

import styles from './MobileSearchPage.module.scss';

export const MobileSearchPage = () => {
  const navigate = useNavigate();

  const handleKeyPress: KeyboardEventHandler<HTMLElement> = (event) => {
    if (event.key === 'Escape') {
      navigate(Routes.HOME, { replace: true });
    }
  };

  return (
    <main className={styles.main} onKeyDown={handleKeyPress}>
      <Search autoFocus />

      <CardList />
    </main>
  );
};
