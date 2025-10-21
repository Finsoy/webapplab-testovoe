import { SeacrhIcon } from '@/shared/assets/icons';

import { useMobile } from '@/shared/hooks';
import { Search } from './Seacrh';
import { useNavigate } from 'react-router';
import { Routes } from '@/shared/constants';

import styles from './Search.module.scss';

export const MobileSearch = () => {
  const isMobile = useMobile();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(Routes.MOBILE_SEARCH, { replace: true });
  };

  return (
    <>
      {!isMobile ? (
        <Search />
      ) : (
        <SeacrhIcon className={styles.search_icon} width={20} height={20} onClick={handleClick} />
      )}
    </>
  );
};
