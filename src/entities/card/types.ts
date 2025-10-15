import { Nullable } from '@/shared/types';

export interface ICardResponse {
  data: ICard[];
  next: Nullable<number>;
}

export interface ICard {
  id: number;
  logo: string;
  icon: string;
  isFavorite?: boolean;
  title: string;
  category: string;
  city: string;
  rating: number;
  description?: string;
}
