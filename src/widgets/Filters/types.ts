import { Nullable } from '@/shared/types';

export type TFilters = 'sort' | 'city' | 'category';

export type FiltersValues = {
  [K in TFilters]: Nullable<string>;
};
