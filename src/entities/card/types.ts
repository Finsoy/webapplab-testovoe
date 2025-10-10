import { Nullable } from '@/shared/types';
import { ICardProps } from '@/shared/ui-kit/Card';

export interface ICardResponse {
  data: ICard[];
  next: Nullable<number>;
}

export interface ICard extends ICardProps {
  id: number;
}
