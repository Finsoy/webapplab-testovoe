import { ICard } from '@/entities/card';
import { api } from './axios';
import { Nullable } from '@/shared/types';

interface IGetCardsProps {
  sort: Nullable<string>;
  city: Nullable<string>;
  category: Nullable<string>;
  search: Nullable<string>;
}

export const getCards = async ({
  sort,
  city,
  category,
  search,
}: IGetCardsProps): Promise<ICard[]> => {
  const params = new URLSearchParams();

  if (city) params.append('city', city);
  if (category) params.append('category', category);

  // search only works with exact matches TITLE
  if (search) params.append('title', search);

  if (sort) {
    const [field, order] = sort.split('_');
    const parsedField = order === 'desc' ? `-${field}` : field;
    params.append('_sort', parsedField);
  }

  const url = `cards?${params.toString()}`;
  const res = await api.get(url);
  return res.data;
};
