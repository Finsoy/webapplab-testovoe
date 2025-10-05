import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'antd/dist/reset.css';
import './app/styles/index.scss';
import { AntdConfigProvider } from './app/providers/AntdConfigProvider.tsx';
import { App } from '@/app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AntdConfigProvider>
      <App />
    </AntdConfigProvider>
  </StrictMode>,
);
