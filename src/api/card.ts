import { api } from './axios';
import { Nullable } from '@/shared/types';
import { ICardResponse } from '@/entities/card';

interface IGetCardsProps {
  sort: Nullable<string>;
  city: Nullable<string>;
  category: Nullable<string>;
  search: Nullable<string>;
  page: number;
}

export const getCards = async ({
  sort,
  city,
  category,
  search,
  page,
}: IGetCardsProps): Promise<ICardResponse> => {
  const params = new URLSearchParams();

  params.append('_page', String(page));

  if (city) params.append('city', city);
  if (category) params.append('category', category);

  // search only works with exact matches TITLE
  if (search) params.append('title', search);

  // params.append('isFavorite', 'true');

  if (sort) {
    const [field, order] = sort.split('_');
    const parsedField = order === 'desc' ? `-${field}` : field;
    params.append('_sort', parsedField);
  }

  params.append('_per_page', '15');

  const url = `cards?${params.toString()}`;
  const res = await api.get(url);
  return res.data;
};

export const updateCradFavorite = async (data: { id: number; isFavorite: boolean }) => {
  const { id, ...payload } = data;

  setTimeout(async () => {
    const res = await api.patch(`cards/${id}`, payload);
    return res;
  }, 1500);
};
