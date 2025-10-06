import logo from '@/shared/assets/files/Logo.svg';
import logoTextDark from '@/shared/assets/files/LogoTextDark.svg';
import logoTextLight from '@/shared/assets/files/LogoTextLight.svg';

import { useThemeStore } from '@/store';
import { Theme } from '@/shared/constants';

import styles from './Header.module.scss';
import { FC } from 'react';

interface ILogo {
  alwaysLight?: boolean;
  alwaysDark?: boolean;
}

export const Logo: FC<ILogo> = ({ alwaysLight, alwaysDark }) => {
  const { theme } = useThemeStore();

  return (
    <div className={styles.logo_container}>
      <img src={logo} alt="logo" />
      {alwaysLight && <img src={logoTextLight} alt="logoText" />}
      {alwaysDark && <img src={logoTextDark} alt="logoText" />}
      {!alwaysLight && !alwaysDark && (
        <img src={theme === Theme.DARK ? logoTextLight : logoTextDark} alt="logoText" />
      )}
    </div>
  );
};
