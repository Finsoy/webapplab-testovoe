import logo from '@/shared/assets/files/Logo.svg';
import logoTextDark from '@/shared/assets/files/LogoTextDark.svg';
import logoTextLight from '@/shared/assets/files/LogoTextLight.svg';

import { useThemeStore } from '@/store';
import { Theme } from '@/shared/constants';

import { FC } from 'react';

import cx from 'classnames';
import styles from './Header.module.scss';

interface ILogo {
  alwaysLight?: boolean;
  alwaysDark?: boolean;
  className?: string;
}

export const Logo: FC<ILogo> = ({ alwaysLight, alwaysDark, className }) => {
  const { theme } = useThemeStore();

  return (
    <div className={cx(styles.logo_container, className)}>
      <img src={logo} alt="logo" />
      {alwaysLight && <img src={logoTextLight} alt="logoText" />}
      {alwaysDark && <img src={logoTextDark} alt="logoText" />}
      {!alwaysLight && !alwaysDark && (
        <img src={theme === Theme.DARK ? logoTextLight : logoTextDark} alt="logoText" />
      )}
    </div>
  );
};
