import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'antd/dist/reset.css';
import './app/styles/index.scss';
import App from './app/index.tsx';
import { AntdConfigProvider } from './app/providers/AntdConfigProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AntdConfigProvider>
      <App />
    </AntdConfigProvider>
  </StrictMode>,
);
