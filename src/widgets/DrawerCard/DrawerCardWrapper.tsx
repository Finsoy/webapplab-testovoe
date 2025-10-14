import { Card, Drawer } from '@/shared/ui-kit';
import { DrawerCard } from './DrawerCard';
import { FC, useState } from 'react';
import { ICardProps } from '@/shared/ui-kit/Card';

// interface IDrawerCardWrapperProps extends ICardProps { }

export const DrawerCardWrapper: FC<Omit<ICardProps, 'onClick'>> = ({ ...card }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card {...card} onClick={showDrawer} />
      <Drawer
        onClose={onClose}
        open={open}
        closable={{ 'aria-label': 'Close Button' }}
        drawerRender={() => <DrawerCard onClose={onClose} {...card} />}
      />
    </>
  );
};
