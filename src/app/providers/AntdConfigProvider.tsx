import type { FC, ReactNode } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { useThemeStore } from '@/store';

interface AntdConfigProviderProps {
  children: ReactNode;
}

export const AntdConfigProvider: FC<AntdConfigProviderProps> = ({ children }) => {
  const { theme } = useThemeStore();
  console.log('🚀 ~ AntdConfigProvider ~ theme:', theme);

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Inter, sans-serif',
          colorPrimary: 'var(--color-primary)',
        },
        algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
