import { Home } from '@/pages';
import { MobileSearchPage } from '@/pages/MobileSearchPage';
import { Routes } from '@/shared/constants';
import { Layout, MobileSearchLayout } from '@/widgets/Layout';
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
  {
    path: Routes.MOBILE_SEARCH,
    element: <MobileSearchLayout />,
    children: [{ index: true, element: <MobileSearchPage /> }],
  },
]);
