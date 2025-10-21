import { useThemeStore } from '@/store';
import { FC } from 'react';

import styles from './ThemeSwitcher.module.scss';
import { Theme } from '@/shared/constants';
import { SunIcon } from '@/shared/assets/icons/SunIcon';
import { MoonIcon } from '@/shared/assets/icons/MoonIcon';

export const ThemeSwitcher: FC = () => {
  const { toggleTheme, theme } = useThemeStore();

  return (
    <div className={styles.theme_switcher} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? (
        <MoonIcon width={20} height={20} className={styles.theme_switcher_icon} />
      ) : (
        <SunIcon width={20} height={20} className={styles.theme_switcher_icon} />
      )}
    </div>
  );
};
