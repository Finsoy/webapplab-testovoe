import { FCC } from '@/shared/types';
import { Drawer as AntdDrawer, DrawerProps } from 'antd';

import styles from './Drawer.module.scss';
import { MoonIcon } from '@/shared/assets/icons/MoonIcon';

// interface IDrawerProps extends DrawerProps { }

export const Drawer: FCC<DrawerProps> = ({ children, ...props }) => {
  return (
    <AntdDrawer
      className={styles.drawer}
      classNames={{ mask: styles.mask, wrapper: styles.wrapper }}
      closeIcon={<MoonIcon />}
      width={490}
      {...props}
    >
      {children}
    </AntdDrawer>
  );
};
