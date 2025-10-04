import { Button } from 'antd';
import { useThemeStore } from '@/store';
import { FC } from 'react';

export const ThemeSwitcher: FC = () => {
  const { toggleTheme, theme } = useThemeStore();

  return <Button onClick={toggleTheme}>Switch Theme ({theme})</Button>;
};
