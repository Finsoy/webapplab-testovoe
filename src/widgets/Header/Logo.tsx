import logo from '@/shared/assets/files/Logo.svg';
import logoTextDark from '@/shared/assets/files/LogoTextDark.svg';
import logoTextLight from '@/shared/assets/files/LogoTextLight.svg';

import { useThemeStore } from '@/store';
import { Theme } from '@/shared/constants';

import styles from './Header.module.scss';

export const Logo = () => {
  const { theme } = useThemeStore();

  return (
    <div className={styles.logo_container}>
      <img src={logo} alt="logo" />
      <img src={theme === Theme.DARK ? logoTextLight : logoTextDark} alt="logoText" />
    </div>
  );
};
