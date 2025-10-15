import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import 'antd/dist/reset.css';
import './app/styles/index.scss';
import { AntdConfigProvider } from './app/providers/AntdConfigProvider.tsx';
import { App } from '@/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AntdConfigProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AntdConfigProvider>
  </StrictMode>,
);
