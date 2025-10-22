import { Home, MobileSearchPage, NotFound } from '@/pages';
import { Routes } from '@/shared/constants';
import { Layout, MobileSearchLayout } from '@/widgets/Layout';
import { createBrowserRouter } from 'react-router';
import { MobileRoute } from '@/shared/router/MobileRoute';

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    element: <MobileRoute />,
    children: [
      {
        path: Routes.MOBILE_SEARCH,
        element: <MobileSearchLayout />,
        children: [{ index: true, element: <MobileSearchPage /> }],
      },
    ],
  },
]);
