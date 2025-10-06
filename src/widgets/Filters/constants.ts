import { TFilters } from './types';

interface IFilters {
  name: TFilters;
  placeholder: string;
}

export const FILTERS: IFilters[] = [
  { name: 'sort', placeholder: 'Сортировка' },
  { name: 'city', placeholder: 'Город' },
  { name: 'category', placeholder: 'Категория' },
];

export const FILTER_NAMES: TFilters[] = FILTERS.map((filter) => filter.name);
