import { Theme } from '@/shared/constants';
import { create } from 'zustand';

type ThemeType = 'light' | 'dark';

interface ThemeState {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: Theme.LIGHT,
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      document.documentElement.setAttribute('data-theme', newTheme);
      return { theme: newTheme };
    }),
}));
