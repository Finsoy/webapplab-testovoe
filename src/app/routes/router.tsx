import { Home } from '@/pages';
import { Routes } from '@/shared/constants';
import { Layout } from '@/widgets/Layout';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '*', element: <div>404</div> },
    ],
  },
]);
