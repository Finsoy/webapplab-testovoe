import { useMobile } from '@/shared/hooks';
import { Navigate, Outlet } from 'react-router';
import { Routes } from '@/shared/constants';

export const MobileRoute = () => {
  const isMobile = useMobile();

  if (isMobile === null) return null;

  if (!isMobile) return <Navigate to={Routes.HOME} replace />;

  return <Outlet />;
};
