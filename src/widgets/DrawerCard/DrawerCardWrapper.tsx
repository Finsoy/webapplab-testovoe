import { Card, Drawer } from '@/shared/ui-kit';
import { DrawerCard } from './DrawerCard';
import { FC, useState } from 'react';
import { ICardProps } from '@/shared/ui-kit/Card';
import { useFavoriteMutation } from './hook';

export const DrawerCardWrapper: FC<Omit<ICardProps, 'onClick' | 'handleIsFavorite'>> = ({
  isFavorite,
  ...card
}) => {
  const [open, setOpen] = useState(false);
  const { handleFavorite } = useFavoriteMutation();
  // const [favorite, setFavorite] = useState(isFavorite);

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  // const handleIsFavorite = async () => {
  //   const previousFavorite = favorite;

  //   try {
  //     setFavorite((prev) => !prev);
  //     await updateCradFavorite({ id: card.id, isFavorite: !favorite });
  //   } catch (e) {
  //     console.error(e);
  //     setFavorite(previousFavorite);
  //     throw new Error('Update isFavorite field went wrong, try again later...');
  //   }
  // };

  const handleIsFavorite = () => {
    handleFavorite(card.id, !isFavorite);
  };

  return (
    <>
      <Card
        {...card}
        onClick={showDrawer}
        handleIsFavorite={handleIsFavorite}
        isFavorite={isFavorite}
      />
      <Drawer
        onClose={closeDrawer}
        open={open}
        closable={{ 'aria-label': 'Close Button' }}
        drawerRender={() => (
          <DrawerCard
            onClose={closeDrawer}
            {...card}
            handleIsFavorite={handleIsFavorite}
            isFavorite={isFavorite}
          />
        )}
      />
    </>
  );
};
