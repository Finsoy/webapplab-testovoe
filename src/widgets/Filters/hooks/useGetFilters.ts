import { useCallback } from 'react';
import { TFilters } from '../types';
import { useGetInitialFilters } from './useGetInitialFilters';
import { useSetUrlParams } from '@/shared/hooks';
import { Nullable } from '@/shared/types';

export const useGetFilters = () => {
  const filters = useGetInitialFilters();
  const { handleChange } = useSetUrlParams();

  const handleChangeFilter = useCallback(
    (value: Nullable<string>, name: TFilters) => {
      handleChange(value, name);
    },
    [handleChange],
  );

  return { filters, handleChangeFilter };
};
