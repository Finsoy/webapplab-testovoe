import { FolderIcon } from '@/shared/assets/icons';
import styles from './CardList.module.scss';
import { Button } from '@/shared/ui-kit';
import { FC } from 'react';

interface IEmptyCardListProps {
  onBack?: () => void;
}

export const EmptyCardList: FC<IEmptyCardListProps> = ({ onBack }) => {
  return (
    <div className={styles.empty_card_list}>
      <FolderIcon />
      <h3>Пока пусто</h3>
      <span>Вы пока ничего не добавили в избранное</span>

      <Button onClick={onBack}>Назад к поставщикам</Button>
    </div>
  );
};
