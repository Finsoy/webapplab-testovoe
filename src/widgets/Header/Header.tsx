import { Search } from '../Search';
import { Logo } from './Logo';

import styles from './Header.module.scss';
import { UserIcon } from '@/shared/assets/icons';
import { ThemeSwitcher } from '../ThemeSwitcher';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />

      <div className={styles.header_search}>
        <Search />
      </div>

      <div className={styles.header_auth} role="button">
        <ThemeSwitcher />
        <UserIcon className={styles.header_auth_icon} />
        Войти
      </div>
    </header>
  );
};
