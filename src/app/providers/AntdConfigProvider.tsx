import type { FC, ReactNode } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { useThemeStore } from '@/store';

interface AntdConfigProviderProps {
  children: ReactNode;
}

export const AntdConfigProvider: FC<AntdConfigProviderProps> = ({ children }) => {
  const { theme } = useThemeStore();

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Inter, sans-serif',
          // colorPrimary: 'var(--accent)',
          colorText: 'var(--text-primary)',
        },
        components: {
          Select: {
            colorBorder: 'transparent',
            activeBorderColor: 'transparent',
            activeOutlineColor: 'transparent',
            hoverBorderColor: 'transparent',
            selectorBg: 'var(--control)',
            optionActiveBg: 'var(--control-hover)',
            optionSelectedBg: 'transparent',
            optionSelectedColor: 'var(--text-primary)',
          },
        },
        algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
