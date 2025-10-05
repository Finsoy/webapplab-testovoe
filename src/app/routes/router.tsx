import { Home } from '@/pages';
import { Routes } from '@/shared/constants';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Home />,
  },
]);
